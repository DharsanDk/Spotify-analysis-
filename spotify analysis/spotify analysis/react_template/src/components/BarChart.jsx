import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data, xLabel, yLabel, color = '#1DB954', horizontal = false }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    const type = horizontal ? 'bar' : 'bar';
    const indexAxis = horizontal ? 'y' : 'x';
    
    chartInstance.current = new Chart(ctx, {
      type,
      data: {
        labels: data.map(item => item.label),
        datasets: [
          {
            label: yLabel,
            data: data.map(item => item.value),
            backgroundColor: color,
            borderColor: 'transparent',
            borderRadius: 4,
            barThickness: horizontal ? 20 : 30,
            maxBarThickness: horizontal ? 25 : 40,
          },
        ],
      },
      options: {
        indexAxis,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#121212',
            titleColor: '#ffffff',
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
              display: !horizontal,
              text: horizontal ? yLabel : xLabel,
              color: '#ffffff',
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
            },
            title: {
              display: true,
              text: horizontal ? xLabel : yLabel,
              color: '#ffffff',
              font: {
                family: 'Inter, sans-serif',
                size: 12,
              },
              padding: { bottom: 10 },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, xLabel, yLabel, color, horizontal]);

  return <canvas ref={chartRef} />;
};

export default BarChart;