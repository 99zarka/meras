/**
 * Initializes all event listeners for the sidebar, including menu toggling,
 * closing menus on outside clicks, and handling scroll/resize events for positioning.
 */
export function initializeSidebarEventListeners() {
    /**
     * Closes all currently open child and grandchild menus in the sidebar.
     * Resets their styles and toggle icons.
     */
    function closeAllChildrenMenus() {
        document.querySelectorAll('.nav-item.is-open').forEach(openItem => {
            openItem.classList.remove('is-open');
            const toggleIcon = openItem.querySelector('.toggle-icon');
            if (toggleIcon) {
                toggleIcon.classList.remove('bi-chevron-left');
                toggleIcon.classList.add('bi-chevron-right');
            }
            const childrenMenu = openItem.querySelector('.children-menu');
            if (childrenMenu) {
                childrenMenu.style.top = '';
                childrenMenu.style.right = '';
                childrenMenu.style.transform = '';
                childrenMenu.style.zIndex = '2000';
            }
        });
        document.querySelectorAll('.has-grandchildren .grandchildren-menu').forEach(menu => {
            menu.classList.remove('is-expanded');
            const toggleIcon = menu.closest('.has-grandchildren').querySelector('.toggle-icon');
            if (toggleIcon) {
                toggleIcon.classList.remove('is-rotated');
            }
        });

        // Remove backdrop if it exists
        const backdrop = document.querySelector('.sidebar-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }

    /**
     * Adds click event listeners to main sidebar items to toggle their children menus.
     * Handles positioning of the children menus to prevent overflow.
     */
    document.querySelectorAll('.main-item').forEach(mainItem => {
        mainItem.addEventListener('click', function (event) {
            event.preventDefault();
            const parentLi = this.closest('.nav-item');
            const childrenMenu = parentLi.querySelector('.children-menu');
            const toggleIcon = this.querySelector('.toggle-icon');

            if (!childrenMenu) {
                const link = this.querySelector('a');
                if (link) {
                     window.location.href = link.href;
                }
                return;
            }

            const isOpening = !parentLi.classList.contains('is-open');
            closeAllChildrenMenus();

            if (isOpening) {
                parentLi.classList.add('is-open');
                const mainItemRect = this.getBoundingClientRect();
                const rightPosition = window.innerWidth - mainItemRect.left;
                
                childrenMenu.style.top = `${mainItemRect.top}px`;
                if (window.innerWidth < 768) {
                    childrenMenu.style.left = `${mainItemRect.left}px`;
                    childrenMenu.style.right = 'auto';

                    // Create and append backdrop
                    const backdrop = document.createElement('div');
                    backdrop.classList.add('sidebar-backdrop');
                    document.body.appendChild(backdrop);
                }
                else{
                    childrenMenu.style.right = `${rightPosition}px`;
                    childrenMenu.style.left = 'auto';

                }

                const menuRect = childrenMenu.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                

                if (menuRect.bottom > viewportHeight) {
                    const overflow = menuRect.bottom - viewportHeight+20;
                    
                    childrenMenu.style.transform = `translateY(-${overflow}px)`;
                } else {
                    childrenMenu.style.transform = 'translateY(0)';
                }
            }
        });
    });

    /**
     * Adds a global click event listener to close sidebar menus when clicking outside of them.
     */
    document.addEventListener('click', function(event) {
        let targetElement = event.target;
        let isInsideSidebarItemWithChildren = false;
        while (targetElement) {
            if (targetElement.classList && (targetElement.classList.contains('main-item') || targetElement.classList.contains('children-menu'))) {
                isInsideSidebarItemWithChildren = true;
                break;
            }
            if (targetElement.classList && targetElement.classList.contains('nav-item') && targetElement.classList.contains('has-children')) {
                isInsideSidebarItemWithChildren = true;
                break;
            }
            targetElement = targetElement.parentElement;
        }

        if (!isInsideSidebarItemWithChildren) {
            closeAllChildrenMenus();
        }
    });

    /**
     * Adds click event listeners to child menu items that have grandchildren,
     * to toggle their respective grandchildren menus.
     */
    document.querySelectorAll('.children-menu .has-grandchildren > a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            const parentLi = this.parentElement;
            const grandchildrenMenu = parentLi.querySelector('.grandchildren-menu');
            const toggleIcon = this.querySelector('.toggle-icon');

            if (grandchildrenMenu) {
                const isOpening = !grandchildrenMenu.classList.contains('is-expanded');
                // Close all other grandchildren menus
                document.querySelectorAll('.has-grandchildren .grandchildren-menu').forEach(menu => {
                    if (menu !== grandchildrenMenu) {
                        menu.classList.remove('is-expanded');
                        const otherToggleIcon = menu.closest('.has-grandchildren').querySelector('.toggle-icon');
                        if (otherToggleIcon) {
                            otherToggleIcon.classList.remove('is-rotated');
                        }
                    }
                });
                

                grandchildrenMenu.classList.toggle('is-expanded', isOpening);
                toggleIcon.classList.toggle('is-rotated', isOpening);
                let childrenMenu = parentLi.closest('.children-menu');
                

            }
        });
    });



    /**
     * Adds a resize event listener to close all children menus when the window is resized.
     */
    window.addEventListener('resize', () => {
        closeAllChildrenMenus();
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('d-none',true);

    });

    /**
     * Adds click event listener to the sidebar toggle button to show/hide the sidebar.
     */
    const sidebarToggleButton = document.getElementById('sidebar-toggle-btn');
    if (sidebarToggleButton) {
        sidebarToggleButton.addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.toggle('d-none');
            }
        });
    }

    /**
     * Adds transitionend event listener to .sidebar .children-menu elements.
     */
    document.querySelectorAll('.grandchildren-menu').forEach(grandChildrenMenu => {
        const childrenMenu = grandChildrenMenu.closest('.children-menu');
        grandChildrenMenu.addEventListener('transitionend', function() {
            const sidebar = document.querySelector('.sidebar');
            let exceedsSideBar = childrenMenu.getBoundingClientRect().bottom > sidebar.getBoundingClientRect().bottom
            if(exceedsSideBar && childrenMenu.getBoundingClientRect().bottom > window.innerHeight){
                const currentPaddingBottom = parseInt(sidebar.style.paddingBottom) || 0;
                sidebar.style.paddingBottom = `${currentPaddingBottom + childrenMenu.getBoundingClientRect().bottom - sidebar.getBoundingClientRect().bottom}px`;
            }
            else{
                sidebar.style.paddingBottom = "8px"
            }
        });
    });

    /**
     * Adds a scroll event listener to adjust the sidebar's sticky position based on scroll direction.
     * Also updates the position of any open children menus.
     */
    window.addEventListener('scroll', () => {
        const childrenMenu = document.querySelector('.is-open .children-menu');
        if (childrenMenu) {
            childrenMenu.style.top = `${childrenMenu.parentElement.getBoundingClientRect().top}px`;
            setTimeout(() => {
                childrenMenu.style.top = `${childrenMenu.parentElement.getBoundingClientRect().top}px`;
            }, 30);
        }
        const sidebar = document.querySelector('.sidebar');
        if (window.innerWidth < 768) {
            sidebar.classList.toggle('position-sticky',false);
            sidebar.classList.toggle('position-relative',false);
            sidebar.classList.toggle('position-static',true);
            return;
        }
        let newPosition = window.scrollY + window.innerHeight - sidebar.offsetHeight;
        let isScrollDown = (newPosition > sidebar.dataset.position)? true : false;
        if(sidebar.offsetHeight< window.innerHeight){
            sidebar.classList.add('position-sticky');
            sidebar.style.top = `${0}px`;
            sidebar.dataset.position = window.scrollY;
        }
        else if (isScrollDown && window.scrollY > sidebar.offsetHeight - window.innerHeight) {
            sidebar.classList.add('position-sticky');
            sidebar.style.top = `${window.innerHeight-sidebar.offsetHeight}px`;
            sidebar.dataset.position = newPosition;
        } else if (!isScrollDown && sidebar.dataset.position > window.scrollY) {
            sidebar.classList.add('position-sticky');
            sidebar.style.top = `${0}px`;
            sidebar.dataset.position = window.scrollY;
        }
        else{
            sidebar.classList.remove('position-sticky');
            sidebar.classList.add('position-relative');

            sidebar.style.top = `${sidebar.dataset.position}px`;
        }

    });
}
