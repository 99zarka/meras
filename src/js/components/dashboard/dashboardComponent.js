import { dashboardItems } from "../../data/dashboardItems.js";

export function getDashboardComponentHTML() {
    const dashboardCardsHTML = dashboardItems.map(item => {
        // Only show the main item, ignore children as per instruction
        return /*html*/`
            <a href="${item.link}" class="dashboard-card shadow rounded-4 d-flex flex-row align-items-between justify-content-between p-2 ${item.text === 'الحجز' ? 'active' : ''} ${item.children && item.children.length > 0 ? 'has-children' : ''}">
                <div class="d-flex flex-column justify-content-between">
                    <div class="dashboard-card-icon" style="">
                        ${item.icon}
                    </div>
                    <div class="dashboard-card-text mt-auto">
                        ${item.text}
                    </div>
                </div> 
                ${item.children && item.children.length > 0 ? '<i class="bi bi-chevron-down my-auto me-auto"></i>' : ''}
            </a>
        `;
    }).join('');

    return /*html*/`
        <div class="dashboard-component mb-5">
            <div class="dashboard-cards-container d-flex flex-wrap justify-content-around align-items-center">
                ${dashboardCardsHTML}
            </div>
        </div>
    `;
}
