import { getSidebarHTML } from './sidebar/sidebarHTML.js';
import { generateSidebarMenuHTML } from './sidebar/sidebarMenuGenerator.js';

export function initializeSidebar() {
    const sidebarMenu = document.getElementById("sidebar-menu");
    sidebarMenu.innerHTML = generateSidebarMenuHTML();
}

export { getSidebarHTML };
