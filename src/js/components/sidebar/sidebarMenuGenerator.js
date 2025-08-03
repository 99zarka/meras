import { menuItems } from '../../data/menuItems.js';
import { generateChildrenMenuHTML } from './childrenMenuGenerator.js';

export function generateSidebarMenuHTML() {
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
                ${generateChildrenMenuHTML(item.children)}
            </li>
        `;
    }).join('');
}
