import { initializeChartDisplayToggle, toggleChartDisplay } from './achievementToggle.js';
import { initializeLineChart } from './lineChart.js';
import { initializeBarChart } from './barChart.js';
import { updateDateTime } from './datetime.js';
import { getSidebarHTML, initializeSidebar } from './sidebarComponent.js';
import { getHeaderHTML } from './headerComponent.js';
import { getContentSectionHTML } from './contentSectionComponent.js';
import { getDetailsSectionHTML } from './detailsSectionComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sidebar-placeholder').innerHTML = getSidebarHTML();
    initializeSidebar();
    document.getElementById('header-placeholder').innerHTML = getHeaderHTML();
    document.getElementById('content-section-placeholder').innerHTML = getContentSectionHTML();
    document.getElementById('details-section-placeholder').innerHTML = getDetailsSectionHTML();

    // Initialize functions from modules
    initializeChartDisplayToggle();
    
    // Line Chart Data
    const lineChartLabels = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس'];
    const lineChartValues = [6, 6, 1, 5, 6, 0, 5, 6];
    initializeLineChart('myChart', lineChartLabels, lineChartValues);

    // Bar Chart Data
    const barChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const barChartValues = [20, 25, 31, 23, 17, 23, 25, 35, 31, 26, 20, 29];
    initializeBarChart('myChart2', barChartLabels, barChartValues);
    updateDateTime();

    // Initialize Bootstrap popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});
