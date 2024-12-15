
// Line Chart for Analytics
let lineCtx = document.getElementById('lineChart').getContext('2d');
let lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Март', 'Април', 'Май', 'Юни', 'Юли'],
        datasets: [{
            label: 'Tasks Completed',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});


// Pie Chart for Analytics
let data = {
    labels: ['Дизайн', 'Анализ', 'Разработка'],
    datasets: [{
        data: [30, 20, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};
let config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        let label = tooltipItem.label || '';
                        let value = tooltipItem.raw;
                        return `${label}: ${value}%`;
                    }
                }
            }
        }
    }
};

// Render Pie Chart
let pieCtx = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(pieCtx, config);

// Hide/show analytics
let analytics = document.querySelector('.analytics-eye');
let eye = analytics.children[0];
console.log(eye)
let analyticsSection = document.querySelector('.analytics');
let height = analyticsSection.scrollHeight;
analytics.addEventListener('click', () => {
    if (analyticsSection.style.display === 'none') {
        analyticsSection.style.display = 'flex';
        eye.src = "imgs/eye.svg";

    } else {
        analyticsSection.style.display = 'none';
        eye.src = "imgs/closedeye.svg";
    }
});