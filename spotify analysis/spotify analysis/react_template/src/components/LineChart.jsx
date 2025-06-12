import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, xLabel, yLabel, color = '#1DB954' }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(item => item.label),
        datasets: [
          {
            label: yLabel,
            data: data.map(item => item.value),
            backgroundColor: 'rgba(29, 185, 84, 0.1)',
            borderColor: color,
            pointBackgroundColor: color,
            pointBorderColor: '#121212',
            pointHoverBackgroundColor: '#FFFFFF',
            pointHoverBorderColor: color,
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#121212',
            titleColor: '#FFFFFF',
            bodyColor: '#b3b3b3',
            titleFont: {
              family: 'Inter, sans-serif',
              size: 14,
              weight: 'bold',
            },
            bodyFont: {
              family: 'Inter, sans-serif',
              size: 12,
            },
            padding: 12,
            cornerRadius: 6,
            displayColors: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: '#b3b3b3',
              font: {
                family: 'Inter, sans-serif',
              },
            },
            title: {
              display: true,
              text: xLabel,
              color: '#FFFFFF',
              font: {
                family: 'Inter, sans-serif',
                size: 12,
              },
              padding: { top: 10 },
            },
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false,
            },
            ticks: {
              color: '#b3b3b3',
              font: {
                family: 'Inter, sans-serif',
              },
              precision: 1,
            },
            title: {
              display: true,
              text: yLabel,
              color: '#FFFFFF',
              font: {
                family: 'Inter, sans-serif',
                size: 12,
              },
              padding: { bottom: 10 },
            },
            beginAtZero: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, xLabel, yLabel, color]);

  return <canvas ref={chartRef} />;
};

export default LineChart;