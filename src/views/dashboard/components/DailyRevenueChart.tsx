import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Badge } from "flowbite-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DailyRevenueChart = () => {
  const data = {
    labels: ["Enroll", "Revenue"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [32, 17],
        backgroundColor: ["#101727", "#ADFF14"],
        hoverBackgroundColor: ["#101727", "#ADFF14"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-shade rounded-xl border flex flex-col justify-between shadow-none">
      <div className="flex justify-between items-center text-sm font-medium border-b px-6 py-4">
        <p className="font-league-spartan font-semibold text-xl">
          Daily Revenue Overview
        </p>
      </div>
      {/* BODY */}
      <div className="flex justify-around items-center h-full">
        <div className="w-full md:w-1/2 h-60 p-4">
          <Pie data={data} options={options} />
        </div>

        <div className="pt-5 flex flex-col gap-8">
          <div className="space-y-3">
            <p className="font-medium text-sm">Enrollment</p>
            <div className="flex gap-4">
              <h1 className="text-5xl font-league-spartan font-semibold">32</h1>
              <Badge className="bg-success text-dominance rounded-full py-1 px-2">
                65.31%
              </Badge>
            </div>
          </div>

          <hr />

          <div className="space-y-3">
            <p className="font-medium text-sm">Revenue</p>
            <div className="flex gap-4">
              <h1 className="text-5xl font-league-spartan font-semibold">17</h1>

              <Badge className="bg-success text-dominance rounded-full py-1 px-2">
                34.69%
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyRevenueChart;
