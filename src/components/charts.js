import { Chart } from 'chart.js';

export function renderChart() {
  const ctx = document.createElement('canvas');
  document.getElementById('chart-container').appendChild(ctx);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Rent', 'Food', 'Transport'],
      datasets: [
        {
          label: 'Expenses',
          data: [500, 200, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    },
  });
}
