import { menuItems } from '../../data/menuItems.js';

export function generateSidebarMenuHTML() {
    const generateMenuHTML = (items) => {
        return items.map(item => {
            const hasGrandchildren = item.grandchildren && item.grandchildren.length > 0;
            const grandchildToggleIconHTML = hasGrandchildren ? '<i class="bi bi-chevron-up toggle-icon me-auto ms-2"></i>' : '';
            return /*html*/`
                <li class="nav-item child-nav-item my-1 rounded-2 ${hasGrandchildren ? ' has-grandchildren' : ''}">
                    <a class="nav-link d-flex align-items-center fw-bold" href="${item.link}" style="color: #291a2e;">
                        ${item.text}
                        ${grandchildToggleIconHTML}
                    </a>
                    ${hasGrandchildren ? /*html*/`
                        <ul class="nav flex-column grandchildren-menu p-0">
                            ${item.grandchildren.map(grandchild => /*html*/`
                                <li class="nav-item w-100">
                                    <a class="nav-link" href="${grandchild.link}" style="color: #291a2e;">${grandchild.text}</a>
                                </li>
                            `).join('')}
                        </ul>
                    ` : ''}
                </li>
            `;
        }).join('');
    };

    return menuItems.map((item, index) => {
        const activeClass = item.active ? " active" : "";
        const hasChildren = item.children && item.children.length > 0;
        const toggleIconHTML = hasChildren ? '<i class="bi bi-chevron-right toggle-icon me-auto ms-2"></i>' : '';

        return /*html*/`
            <li class="nav-item${hasChildren ? ' has-children' : ''}">
                <div class="nav-link${activeClass} px-0 text-white main-item d-flex align-items-center py-2" data-index="${index}">
                    <img src="src/images/sidebar/${item.icon}" alt="${item.text} icon" class="ms-2" style="width: 24px; height: 24px;" aria-hidden="true">
                    ${item.text}
                    ${toggleIconHTML}
                </div>
                ${hasChildren ? /*html*/`
                    <div class="children-menu rounded p-2 position-fixed" style="color: #291a2e;">
                        <ul class="nav flex-column p-0">
                            ${generateMenuHTML(item.children)}
                        </ul>
                    </div>
                ` : ''}
            </li>
        `;
    }).join('');
}
