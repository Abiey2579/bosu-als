import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

import Logs from "./Logs";

const Overview = () => {
  return (
    <div className="pb-4 pt-8 space-y-4 flex-1">
      <div className="px-6 flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Account Overview</h1>
      </div>

      {/* STATS */}
      <div className="px-6 grid grid-cols-3 gap-4">
        {/* FIRST  */}
        <div className="p-4 space-y-4 bg-shade border rounded-xl">
          <h4 className="text-xs text-gray-500 font-medium">Total Courses</h4>
          <h1 className="text-5xl font-semibold">48</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-white bg-cyan-600  font-semibold text-xs rounded-full px-2 py-1">
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
          <h4 className="text-xs text-gray-500 font-medium">
            Total Departments
          </h4>
          <h1 className="text-5xl font-semibold">8,122</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-white bg-cyan-600  font-semibold text-xs rounded-full px-2 py-1">
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
          <h4 className="text-xs text-gray-500 font-medium">Total Venues</h4>
          <h1 className="text-5xl font-semibold">44</h1>

          <div className="flex items-center gap-2">
            <div className="flex text-white bg-cyan-600  font-semibold text-xs rounded-full px-2 py-1">
              <ArrowTrendingUpIcon className="w-3 mr-1" />
              50%
            </div>
            <span className="text-xs font-medium text-gray-600">
              since 9th Feb
            </span>
          </div>
        </div>
      </div>

      <Logs />
    </div>
  );
};

export default Overview;
