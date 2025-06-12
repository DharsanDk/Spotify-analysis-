import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(item => item.label),
        datasets: [
          {
            data: data.map(item => item.value),
            backgroundColor: [
              '#1DB954', // Spotify green
              '#1ED760', // Lighter green
              '#2D46B9', // Blue
              '#509BF5', // Light blue
              '#F037A5', // Pink
            ],
            borderWidth: 0,
            hoverOffset: 15,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#FFFFFF',
              font: {
                family: 'Inter, sans-serif',
              },
              padding: 20,
              generateLabels: (chart) => {
                const { data } = chart;
                if (data.labels.length && data.datasets.length) {
                  return data.labels.map((label, i) => {
                    const value = data.datasets[0].data[i];
                    const percentage = ((value / data.datasets[0].data.reduce((a, b) => a + b, 0)) * 100).toFixed(1);
                    return {
                      text: `${label} (${percentage}%)`,
                      fillStyle: data.datasets[0].backgroundColor[i],
                      hidden: false,
                      index: i,
                    };
                  });
                }
                return [];
              }
            },
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
            displayColors: true,
            callbacks: {
              label: function(context) {
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${context.label}: ${percentage}%`;
              }
            }
          },
        },
        cutout: '60%',
        animation: {
          animateScale: true,
          animateRotate: true
        }
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;