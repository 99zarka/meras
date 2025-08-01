export function initializeLineChart(chartId, labels, data) {
    const ctx = document.getElementById(chartId).getContext('2d');

    const lineChartData = {
        labels: labels,
        datasets: [{
            label: 'مبيعات',
            data: data,
            fill: false,
            borderColor: '#e3ae36',
            tension: 0.1
        }]
    };

    const lineChartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: { display: false, labels: { color: 'white' } },
            tooltip: { enabled: true },
            title: {
                display: true,
                color: 'white',
                text: '65%',
                align: 'start',
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: 25,
                }
            }
        },
        scales: {
            x: { display: false },
            y: { display: false, beginAtZero: true }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: lineChartData,
        options: lineChartOptions
    });
}
