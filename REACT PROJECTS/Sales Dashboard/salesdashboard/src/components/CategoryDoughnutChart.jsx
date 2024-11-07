import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const CategoryDoughnutChart = ({ data }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data && data.length > 0) { // Ensure data is defined and has content
      setChartData({
        labels: data.map(item => item.month),
        datasets: [{
          label: 'Monthly Sales',
          data: data.map(item => item.sales),
          backgroundColor: '#4A90E2'
        }]
      });
    }
  }, [data]);

  return data && data.length > 0 ? (
    <Bar data={chartData} options={{ responsive: true, plugins: { tooltip: { enabled: true } } }} />
  ) : (
    <p>Loading data...</p>
  );
};

export default CategoryDoughnutChart;
