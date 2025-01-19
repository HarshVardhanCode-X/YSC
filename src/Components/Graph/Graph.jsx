import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { fetchWeeklyData } from "./api";



Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Title,
  Tooltip,
  Filler
);

export default function WeeklyGraph() {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    
    fetchWeeklyData().then((data) => {
      
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      
      const newChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.days,
          datasets: [
            {
              label: "This Week",
              data: data.thisWeek,
              borderColor: "#f97316",
              backgroundColor: "rgba(249, 115, 22, 0.2)", 
              tension: 0.4,
              fill: true,
            },
            {
              label: "Last Week",
              data: data.lastWeek,
              borderColor: "#94a3b8", // Gray
              backgroundColor: "rgba(148, 163, 184, 0.2)", // Semi-transparent
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Days",
              },
            },
            y: {
              title: {
                display: true,
                text: "Values",
              },
              beginAtZero: true,
            },
          },
        },
      });

      setChartInstance(newChart);
    });

    
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="w-1/2 mx-auto">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
