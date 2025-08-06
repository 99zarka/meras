export function initializeDashboardEventListeners() {
    document.querySelectorAll('.dashboard-card.has-children').forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault();

        });
    });
}
