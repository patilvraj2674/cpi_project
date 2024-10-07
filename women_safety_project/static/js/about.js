// Initialize a chart instance
let chart;

function showGraph(graphType) {
    const ctx = document.getElementById('graphCanvas').getContext('2d');

    // Destroy any previous chart
    if (chart) {
        chart.destroy();
    }

    // Bar Graph Data (Crimes against women per state, 2022)
    const barData = {
        labels: ['Delhi', 'Haryana', 'Telangana', 'Rajasthan', 'Odisha', 'Andhra Pradesh'],
        datasets: [{
            label: 'Crimes per 100,000 women (2022)',
            data: [144.4, 118.7, 117.0, 115.1, 103.3, 96.2],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    // Pie Chart Data (Types of crimes against women, 2022)
    const pieData = {
        labels: ['Cruelty by husband/relatives', 'Kidnapping/abduction', 'Assault to outrage modesty', 'Rape'],
        datasets: [{
            data: [31.4, 19.2, 18.7, 7.1],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverOffset: 4
        }]
    };

    // Line Graph Data (Crime rate trends 2018-2022)
    const lineData = {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Crimes per 100,000 women',
            data: [58.8, 62.0, 56.5, 64.5, 66.4],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2
        }]
    };

    // Define configuration for different graph types
    const config = {
        bar: {
            type: 'bar',
            data: barData,
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        },
        pie: {
            type: 'pie',
            data: pieData
        },
        line: {
            type: 'line',
            data: lineData,
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        }
    };

    // Create the chart
    chart = new Chart(ctx, config[graphType]);
}

// Initialize the default graph on page load
document.addEventListener('DOMContentLoaded', function () {
    showGraph('bar'); // Default graph type
});
