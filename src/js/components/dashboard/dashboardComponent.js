import { dashboardItems } from "../../data/dashboardItems.js";
import { generateChildrenMenuHTML } from "../sidebar/childrenMenuGenerator.js";
export function getDashboardComponentHTML() {
    const dashboardCardsHTML = dashboardItems.map(item => {
        const activeClass = item.active ? " active" : "";
        const hasChildren = item.children && item.children.length > 0;
        // Only show the main item, ignore children as per instruction
        return /*html*/`
            <div class="nav-item ${hasChildren ? ' has-children' : ''}">
                <a href="${item.link}" class="main-item dashboard-card shadow rounded-4 d-flex flex-row align-items-between justify-content-between p-2 ${item.text === 'الحجز' ? 'active' : ''} ${item.children && item.children.length > 0 ? 'has-children' : ''}">
                    <div class="d-flex flex-column justify-content-between">
                        <div class="dashboard-card-icon" style="">
                            ${item.icon}
                        </div>
                        <div class="dashboard-card-text mt-auto">
                            ${item.text}
                        </div>
                    </div> 
                    ${hasChildren? '<i class="bi bi-chevron-down my-auto me-auto"></i>' : ''}
                </a>
                ${generateChildrenMenuHTML(item.children)}
            </div>
        `;
    }).join('');

    return /*html*/`
        <div class="dashboard-component mb-5">
            <ul class="dashboard-cards-container d-flex flex-wrap justify-content-between align-items-center">
                ${dashboardCardsHTML}
            </ul>
        </div>
    `;
}
