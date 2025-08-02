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
                top: 60
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
            customTitle: { // This is the custom plugin ID
                beforeDraw(chart) {
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return;

                    ctx.save();
                    ctx.textAlign = 'right';
                    ctx.textBaseline = 'top';
                    ctx.direction = 'rtl';

                    ctx.font = 'bold 20px Tajawal, sans-serif';
                    ctx.fillStyle = '#000';
                    ctx.fillText('نظرة عامة', chartArea.right - 8, chartArea.top - 50);

                    ctx.font = '14px Tajawal, sans-serif';
                    ctx.fillStyle = '#5E6E74';
                    ctx.fillText('الأرباح الشهرية', chartArea.right - 8, chartArea.top - 20);

                    ctx.restore();
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: barChartOptions,
        plugins: barChartOptions.plugins
    });
}
