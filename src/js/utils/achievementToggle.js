
export function initializeChartDisplayToggle() {
    const swapIcon = document.getElementById('swap-icon');
    const achievedSpan = document.getElementById('achieved-span');
    const targetSpan = document.getElementById('target-span');

    // Event listener for the swap icon to toggle between target and achieved views
    swapIcon.addEventListener('click', function () {
        // Determine the current active state based on 'text-white' class on targetSpan
        const isTargetCurrentlyActive = targetSpan.classList.contains('active-chart-span');
        toggleChartDisplay(!isTargetCurrentlyActive);
    });

    // Event listeners for 'Achieved' and 'Target' spans to directly set the view
    achievedSpan.addEventListener('click', () => toggleChartDisplay(false)); // Show achieved view
    targetSpan.addEventListener('click', () => toggleChartDisplay(true));  // Show target view
}

/**
 * Toggles the display between 'Target' and 'Achieved' views for the chart and related elements.
 * Updates CSS classes to reflect the active state and chart color.
 * @param {boolean} showTargetView - If true, displays the 'Target' view; otherwise, displays the 'Achieved' view.
 */
export function toggleChartDisplay(showTargetView) {
    const achievedSpan = document.getElementById('achieved-span');
    const targetSpan = document.getElementById('target-span');
    const chartArea = document.getElementById('chart-area');

    // Update active/inactive states for 'Achieved' and 'Target' spans
    if (showTargetView) {
        // Activate Target span, deactivate Achieved span
        targetSpan.classList.add('text-white', 'active-chart-span');
        targetSpan.classList.remove('text-secondary');
        achievedSpan.classList.add('text-secondary');
        achievedSpan.classList.remove('text-white', 'active-chart-span');
    } else {
        // Activate Achieved span, deactivate Target span
        achievedSpan.classList.add('text-white', 'active-chart-span');
        achievedSpan.classList.remove('text-secondary');
        targetSpan.classList.add('text-secondary');
        targetSpan.classList.remove('text-white', 'active-chart-span');
    }

    // Update chart area color based on the active view
    if (showTargetView) {
        // Set chart area to danger color for Target view
        chartArea.classList.add('text-danger');
        chartArea.classList.remove('text-success');
    } else {
        // Set chart area to success color for Achieved view
        chartArea.classList.add('text-success');
        chartArea.classList.remove('text-danger');
    }
}
