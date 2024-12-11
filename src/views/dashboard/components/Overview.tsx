import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import DailyRevenueChart from "./DailyRevenueChart";
import WeeklyRevenueChart from "./WeeklyRevenueChart";

const Overview = () => {
  return (
    <div className="px-6 pb-4 pt-8 space-y-4 flex-1">
      <h1 className="font-semibold text-2xl">Account Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* FIRST  */}
        <div className="p-4 space-y-4 bg-shade border rounded-xl">
          <h4 className="text-xs text-gray-500 font-medium">Total Courses</h4>
          <h1 className="text-5xl font-semibold font-Headings">11</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-dominance bg-success  font-semibold text-xs rounded-full px-2 py-1">
              <ArrowTrendingUpIcon className="w-3 mr-1" />
              50%
            </div>
            <span className="text-xs font-medium text-gray-600">
              since 9th Feb
            </span>
          </div>
        </div>

        {/* SECOND */}
        <div className="p-4 space-y-4 bg-shade border border-gray-200 rounded-xl">
          <h4 className="text-xs text-gray-500 font-medium">Total Students</h4>
          <h1 className="text-5xl font-semibold font-Headings">8,122</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-dominance bg-success  font-semibold text-xs rounded-full px-2 py-1">
              <ArrowTrendingUpIcon className="w-3 mr-1" />
              50%
            </div>
            <span className="text-xs font-medium text-gray-600">
              since 9th Feb
            </span>
          </div>
        </div>
        {/* THIRD */}
        <div className="p-4 space-y-4 bg-shade border border-gray-200 rounded-xl">
          <h4 className="text-xs text-gray-500 font-medium">
            This Month's Revenue
          </h4>
          <h1 className="text-5xl font-semibold font-Headings">
            16,002 <span className="text-base">USD</span>
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex text-dominance bg-success  font-semibold text-xs rounded-full px-2 py-1">
              <ArrowTrendingUpIcon className="w-3 mr-1" />
              50%
            </div>
            <span className="text-xs font-medium text-gray-600">
              since 9th Feb
            </span>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-4">
        <DailyRevenueChart />
        <WeeklyRevenueChart />
      </div>
    </div>
  );
};

export default Overview;
