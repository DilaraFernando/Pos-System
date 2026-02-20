
    lucide.createIcons();

    // Sample Chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
    type: 'line',
    data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
    label: 'Revenue',
    data: [65000, 72000, 59000, 88000, 95000, 112000, 148920],
    borderColor: '#6366f1',
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    tension: 0.4,
    fill: true,
    pointBackgroundColor: '#fff',
    pointBorderColor: '#6366f1',
    pointBorderWidth: 2,
}]
},
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
    x: { grid: { display: false } }
}
}
});
