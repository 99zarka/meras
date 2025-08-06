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

    // Initialize Bootstrap popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');

    // Function to apply the saved theme
    const applyTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            icon.classList.remove('bi-sun');
            icon.classList.add('bi-moon');
        } else {
            document.body.classList.remove('dark-mode');
            icon.classList.remove('bi-moon');
            icon.classList.add('bi-sun');
        }
    };

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        applyTheme();
    });

    // Apply theme on initial load
    applyTheme();
});
