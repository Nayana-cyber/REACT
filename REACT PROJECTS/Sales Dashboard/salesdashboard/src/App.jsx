// App.jsx
import React, { useState, useEffect } from 'react';
import MonthlySalesBarChart from './components/MonthlySalesBarChart';
import WeeklyTrendLineChart from './components/WeeklyTrendLineChart';
import CategoryDoughnutChart from './components/CategoryDoughnutChart';
import ThemeToggle from './components/ThemeToggle';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      {loading ? <LoadingSpinner /> : (
        data ? (
          <>
            <MonthlySalesBarChart data={data.monthlySales} />
            <WeeklyTrendLineChart data={data.weeklyTrends} />
            <CategoryDoughnutChart data={data.categorySales} />
          </>
        ) : (
          <p>Error loading data.</p>
        )
      )}
    </div>
  );
};

export default App;
