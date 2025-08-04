export function initializeBarChart(chartId, labels, data) {
    const ctx = document.getElementById(chartId).getContext('2d');

    const barChartData = {
        labels: labels,
        datasets: [{
            label: 'الأرباح الشهرية',
            data: data,
            backgroundColor: '#E7E7E7',
            borderColor: '#E7E7E7',
            hoverBackgroundColor: '#884B50',
            hoverBorderColor: '#884B50',
            borderWidth: 1,
            borderRadius: { 
                topLeft: 8,
                topRight: 8,
                bottomLeft: 8,
                bottomRight: 8
            },
            borderSkipped: false,
        }]
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 30
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                display: false,
                ticks: {
                    color: 'black'
                },
                grid: {
                    display: false
                }
            },
            x: {
                display: true,
                ticks: {
                    color: '#5E6E74',
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        family: 'Poppins',
                        size: 10
                    }
                },
                 grid: {
                    display: false
                },
                border: {
                    color: 'transparent'
                },
                categoryPercentage: 0.8,
                barPercentage: 0.6
            }
        },
         plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                position: 'average',
                mode: 'point',
                intersect: false,
                xAlign: 'center',
                yAlign: 'bottom',
                callbacks: {
                    title: () => '',
                    label: function(context) {
                        return context.parsed.y + '%';
                    }
                }
            },
            
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: barChartOptions,
        plugins: barChartOptions.plugins
    });
}
