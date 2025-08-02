export function getSidebarHTML() {
    return /*html*/`
        <nav class="col-md-3 col-xl-2 d-none d-md-block sidebar p-2 overflow-auto"  style="scrollbar-width: none; width: 280px;" data-position="0">
            <div class="rounded-4 text-white" style="background-color: #331D1F;">
                <!-- Organization Logo -->
                <div class="p-3 d-flex justify-content-center">
                    <img src="assets/logo2.svg" alt="Organization Logo" class="img-fluid rounded">
                </div>

                <!-- User Profile -->
                <div class="d-flex justify-content-between align-items-center p-2 m-2 bg-transparent rounded-4" style="border: 1px solid rgba(255, 255, 255, 0.05);">
                    <div class="d-flex align-items-center">
                        <img src="assets/profilepic.jpg" alt="User Profile" class="rounded-circle ms-2">
                        <div>
                            <h6 class="mb-0">محمد جلال</h6>
                            <small class="text-white-50">اخر تحديث 1/1/2025</small>
                        </div>
                    </div>
                    <a href="signin.html" class="text-white"><img src="assets/logout.svg" alt="log out icon" class="img-fluid"></a>
                </div>

                <!-- Chart Canvas -->
                <div class="p-3 p-2 m-3 rounded-4 text-success" style="border: 1px solid #868384; background-color: #10090a;" id="chart-container">
                    <div class="row text-success" id="chart-area"  style="font-size: x-small;">

                        <div class="col d-flex align-items-center">
                            <div class="p-0 ms-2">
                                <div class="mb-0">4.2%</div>
                                <div class="">منذ شهر</div>
                            </div>
                            <div class="text-end">
                                <i class="bi bi-arrow-up-circle fs-5"></i>
                            </div>
                        </div>

                        <div class="col">
                            <div class="row">
                                <div class="col-12 text-center p-0">KPI</div>
                                <div class="col-12 text-center">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <span class="text-white user-select-none" id="achieved-span" style="cursor: pointer;">المــحــــــــقــق</span>
                                        <img src="assets/swap.svg" alt="swap icon" class="img-fluid mx-2 user-select-none" style="cursor: pointer;" id="swap-icon">
                                        <span class="text-secondary user-select-none" id="target-span" style="cursor: pointer;">المستهدف</span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="canvas-wrapper" style="min-height: 130px; display: flex; align-items: center; justify-content: center;">
                        <canvas id="myChart" style="height: 130px; width: 100%;"></canvas>
                    </div>


                </div>

                <hr class="m-3">

                <ul class="nav flex-column p-0 m-3" id="sidebar-menu" style="font-size: small;">
                    <!-- Sidebar items will be inserted here by JavaScript -->
                </ul>

            </div>
        </nav>
    `;
}

export function initializeSidebar() {
    const sidebarMenu = document.getElementById("sidebar-menu");
    const menuItems = [
        { text: "الرئيسية", link: "#", icon: "house", active: true, children: [] },
        { text: "المشاريع", link: "#", icon: "briefcase", children: [
            { text: "مشروع أ", link: "#" },
            { text: "مشروع ب", link: "#" },
            { text: "مشروع ج", link: "#" }
        ]},
        { text: "PMO", link: "#", icon: "clipboard", children: [
            { text: "تقرير 1", link: "#" },
            { text: "تقرير 2", link: "#" }
        ]},
        { text: "إدارة الاملاك", link: "#", icon: "building", children: [
            { text: "عقار 1", link: "#" },
            { text: "عقار 2", link: "#" }
        ]},
        { text: "خدمة العملاء", link: "#", icon: "person-lines-fill", children: [] },
        { text: "التطوير والاستثمار", link: "#", icon: "graph-up", children: [
            { text: "فرصة 1", link: "#" },
            { text: "فرصة 2", link: "#" },
            { text: "فرصة 3", link: "#" }
        ]},
        { text: "المواد التسويقية", link: "#", icon: "megaphone", children: [] },
        { text: "المشتريات", link: "#", icon: "briefcase", children: [
            { text: "طلب شراء 1", link: "#" },
            { text: "طلب شراء 2", link: "#" }
        ]},
        { text: "المعاملات الحكومية", link: "#", icon: "bank", children: [] },
        { text: "التقارير والاحصائيات", link: "#", icon: "bar-chart", children: [
            { text: "تقرير مبيعات", link: "#" },
            { text: "تقرير أداء", link: "#" }
        ]},
        { text: "الاعدادات", link: "#", icon: "gear", children: [] }
    ];

    let sidebarHTML = "";
    menuItems.forEach((item, index) => {
        const activeClass = item.active ? " active" : "";
        const hasChildren = item.children && item.children.length > 0;
        const toggleIconHTML = hasChildren ? '<i class="bi bi-chevron-right toggle-icon me-auto ms-2"></i>' : '';

        sidebarHTML += `
            <li class="nav-item${hasChildren ? ' has-children' : ''}">
                <div class="nav-link${activeClass} px-0 text-white main-item d-flex align-items-center py-2" data-index="${index}">
                    <i class="bi bi-${item.icon} ms-2 fs-6" aria-hidden="true"></i>
                    ${item.text}
                    ${toggleIconHTML}
                </div>
        `;

        if (hasChildren) {
            sidebarHTML += `
                <div class="children-menu rounded p-4" style="border: 1px solid #868384; background-color: #f5f5f5;">
                    <ul class="nav flex-column">
            `;
            item.children.forEach(child => {
                sidebarHTML += `
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="${child.link}">${child.text}</a>
                        </li>
                `;
            });
            sidebarHTML += `
                    </ul>
                </div>
            `;
        }

        sidebarHTML += `</li>`;
    });

    sidebarMenu.innerHTML = sidebarHTML;

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
                 childrenMenu.style.zIndex = '1005';
             }
        });
    }

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
                const sidebarRect = document.querySelector('.sidebar').getBoundingClientRect();
                const menuWidth = childrenMenu.offsetWidth;
                const rightPosition = window.innerWidth - mainItemRect.left;

                childrenMenu.style.top = `${mainItemRect.top}px`;
                childrenMenu.style.right = `${rightPosition}px`;
                childrenMenu.style.left = 'auto';

                const menuRect = childrenMenu.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                console.log(menuRect.bottom, viewportHeight, "menuRect.bottom, viewportHeight");
                

                if (menuRect.bottom > viewportHeight) {
                    const overflow = menuRect.bottom - viewportHeight+20;
                    
                    childrenMenu.style.transform = `translateY(-${overflow}px)`;
                } else {
                    childrenMenu.style.transform = 'translateY(0)';
                }
            }
        });
    });

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

    window.addEventListener('resize', closeAllChildrenMenus);
    
    window.addEventListener('scroll', () => {
        const sidebar = document.querySelector('.sidebar');
        let newPosition = window.scrollY + window.innerHeight - sidebar.offsetHeight;
        /* console.log(sidebar.dataset.position,"old.position");
        console.log(newPosition,"new pos");
        console.log(sidebar.offsetHeight,"sidebar.offsetHeight");
        console.log(window.scrollY,"scrollY");
        console.log(window.innerHeight,"innerHeight");
        console.log(window.scrollY + window.innerHeight,"scrollY + innerHeight"); */
        let isScrollDown = (newPosition > sidebar.dataset.position)? true : false;
        if(sidebar.offsetHeight< window.innerHeight){
            sidebar.style.position = 'sticky';
            sidebar.style.top = `${0}px`;
            sidebar.dataset.position = window.scrollY;
        }
        else if (isScrollDown && window.scrollY > sidebar.offsetHeight - window.innerHeight) {
            sidebar.style.position = 'sticky';
            sidebar.style.top = `${window.innerHeight-sidebar.offsetHeight}px`;
            sidebar.dataset.position = newPosition;
            console.log("Scrolling down");

        } else if (!isScrollDown && sidebar.dataset.position > window.scrollY) {
            sidebar.style.position = 'sticky';
            sidebar.style.top = `${0}px`;
            sidebar.dataset.position = window.scrollY;
            console.log("Scrolling up");
        }
        else{
            sidebar.style.position = 'relative';
            sidebar.style.top = `${sidebar.dataset.position}px`;
            console.log("Scrolling else");

        }
        const childrenMenu = document.querySelector('.is-open .children-menu');
        if (childrenMenu) {
            childrenMenu.style.top = `${childrenMenu.parentElement.getBoundingClientRect().top}px`;
            setTimeout(() => {
                childrenMenu.style.top = `${childrenMenu.parentElement.getBoundingClientRect().top}px`;
            }, 30);
        }
    });
}
