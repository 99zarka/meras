import { getUserData } from '../data/userData.js';

const firstName = getUserData().firstName;

export function getHeaderHTML() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');


    return /*html*/`
        <div class="row flex-row mb-3 white-bg rounded-4 p-1 p-sm-3 d-flex align-items-center justify-content-between">
            <div class="col-auto mx-auto" id="header-title">
                <h3 class="mb-0">
                    ${
                        (page)?`مشروع: ${page}`:`صباح الخير , ${firstName} 👋🏻`
                    }
                </h3>
            </div>
            <div class="col d-flex align-items-center justify-content-end" id="searchBoxContainer">
                <!-- Search Box Container -->
                <!-- Removed input-group and button, added relative positioning container -->
                <form class="rounded-2 me-3" id="searchBox" action="#">
                    <!-- Added ps-4 for padding-left to make space for the icon -->
                    <button type="submit" class="btn position-absolute top-50 translate-middle-y" style="left: 0rem; background: none; border: none; padding: 0;">
                        <i class="bi bi-search text-muted"></i>
                    </button>
                    <input type="text" name="term" class="form-control bg-transparent" placeholder="بحث..." aria-label="Search" required>
                    <span class="shortcut-hint">/ ⌘</span>
                </form>
                <!-- Notification Icon Button -->
                <button class="btn rounded-2 border-0 mx-1 mx-md-3 d-flex align-items-center justify-content-center" aria-label="Notifications">
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
