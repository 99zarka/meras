export function generateChildrenMenuHTML(children) {
    if (!children || children.length === 0) {
        return '';
    }

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

    return /*html*/`
        <div class="children-menu rounded p-2 position-fixed" style="color: #291a2e;">
            <ul class="nav flex-column p-0">
                ${generateMenuHTML(children)}
            </ul>
        </div>
    `;
}
