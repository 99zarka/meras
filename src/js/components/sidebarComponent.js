import { getSidebarHTML } from './sidebar/sidebarHTML.js';
import { generateSidebarMenuHTML } from './sidebar/sidebarMenuGenerator.js';
import { initializeSidebarEventListeners } from './sidebar/sidebarEventListeners.js';

export function initializeSidebar() {
    const sidebarMenu = document.getElementById("sidebar-menu");
    sidebarMenu.innerHTML = generateSidebarMenuHTML();
    initializeSidebarEventListeners();
}

export { getSidebarHTML };
