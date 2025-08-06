export function initializeDashboardEventListeners() {
    document.querySelectorAll('.dashboard-card').forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault();

        });
    });
}
