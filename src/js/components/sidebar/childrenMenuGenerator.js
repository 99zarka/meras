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
                    <a class="nav-link d-flex align-items-center fw-bold child-link" href="${item.link}">
                        ${item.text}
                        ${grandchildToggleIconHTML}
                    </a>
                    ${hasGrandchildren ? /*html*/`
                        <div class="grandchildren-menu">
                            <ul class="nav flex-column grandchildren-wrapper  p-0">
                                ${item.grandchildren.map(grandchild => /*html*/`
                                    <li class="nav-item w-100">
                                        <a class="nav-link" href="${grandchild.link}">${grandchild.text}</a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </li>
            `;
        }).join('');
    };

    return /*html*/`
        <div class="children-menu rounded p-2">
            <ul class="nav flex-column p-0">
                ${generateMenuHTML(children)}
            </ul>
        </div>
    `;
}
