import { renderChart } from './components/chart';
import './styles/main.css';

document.getElementById('app').innerHTML = `
  <h1>Personal Budget Tracker</h1>
  <div id="chart-container"></div>
`;

renderChart();
