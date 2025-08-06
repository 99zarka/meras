import { initializeChartDisplayToggle, toggleChartDisplay } from './utils/achievementToggle.js';
import { initializeLineChart } from './charts/lineChart.js';
import { initializeBarChart } from './charts/barChart.js';
import { updateDateTime } from './utils/datetime.js';
import { getSidebarHTML, initializeSidebar } from './components/sidebarComponent.js';
import { getHeaderHTML } from './components/headerComponent.js';
import { getDashboardSectionHTML } from './components/dashboardSection.js';
import { getGeneralLookHTML } from './components/generalLookComponent.js';
import { getDetailsSectionHTML } from './components/detailsSectionComponent.js';
import { lineChartLabels, lineChartValues } from './data/lineChartData.js';
import { barChartLabels, barChartValues } from './data/barChartData.js';
import { initializeThemeToggle } from './utils/applyTheme.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sidebar-placeholder').innerHTML = getSidebarHTML();
    initializeSidebar();
    document.getElementById('header-placeholder').innerHTML = getHeaderHTML();
    document.getElementById('content-section-placeholder').innerHTML = getDashboardSectionHTML();
    document.getElementById('general-look-placeholder').innerHTML = getGeneralLookHTML();
    document.getElementById('details-section-placeholder').innerHTML = getDetailsSectionHTML();

    // Initialize functions from modules
    initializeChartDisplayToggle();
    initializeLineChart('myChart', lineChartLabels, lineChartValues);
    initializeBarChart('myChart2', barChartLabels, barChartValues);
    updateDateTime();
    initializeThemeToggle();

    // Initialize Bootstrap popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
});
