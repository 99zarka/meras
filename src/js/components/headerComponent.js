export function getHeaderHTML() {
    const username = "محمد"; // Example username, replace with dynamic data if needed
    return /*html*/`
        <div class="row flex-row mb-3 white-bg rounded-4 p-3 d-flex align-items-center justify-content-between">
            <div class="col-auto" id="header-title">
                <h3 class="mb-0">صباح الخير , ${username} 👋🏻</h3>
            </div>
            <div class="col d-flex align-items-center justify-content-end" id="searchBoxContainer">
                <!-- Search Box Container -->
                <!-- Removed input-group and button, added relative positioning container -->
                <div class="rounded-2 me-3" style="max-width: 300px; width: 100%;" id="searchBox">
                    <!-- Added ps-4 for padding-left to make space for the icon -->
                    <i class="bi bi-search position-absolute top-50 translate-middle-y text-muted" style="left: 1rem; pointer-events: none;"></i>
                    <input type="text" class="form-control bg-transparent" placeholder="بحث..." aria-label="Search">
                    <span class="shortcut-hint">/ ⌘</span>
                </div>
                <!-- Notification Icon Button -->
                <button class="btn rounded-2 border-0 mx-3 d-flex align-items-center justify-content-center" aria-label="Notifications">
                    <i class="bi bi-bell-fill fs-5"></i>
                </button>
                <!-- Light/Dark Mode Toggle Button -->
                <button id="darkModeToggle" class="btn rounded-2 border-0 d-flex align-items-center justify-content-center bg-transparent" aria-label="Toggle light/dark mode">
                    <i class="bi bi-sun fs-5"></i> <!-- Or bi-moon for dark mode -->
                </button>
            </div>
        </div>
    `;
}
