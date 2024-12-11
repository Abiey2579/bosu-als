import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyRevenueChart: React.FC = () => {
  // Data for the chart
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"], // X-axis labels
    datasets: [
      {
        label: "Enrollment",
        data: [50, 70, 90, 100], // Data points for Enrollment
        backgroundColor: "#101727", // Bar color
        borderColor: "#101727", // Border color
        borderWidth: 1, // Bar border width
      },
      {
        label: "Revenue",
        data: [500, 700, 900, 1000], // Data points for Revenue
        backgroundColor: "#ADFF14",
        borderColor: "#ADFF14",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Students and Revenue (Monthly)",
      },
    },
  };

  return (
    <div className="bg-shade border rounded-xl flex flex-col justify-between shadow-none">
      <div className="flex justify-between items-center text-sm font-medium border-b px-6 py-4">
        <p className="font-league-spartan font-semibold text-xl">
          Weekly Revenue Overview
        </p>
      </div>

      <div className="w-full h-72 px-4 py-2">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyRevenueChart;
