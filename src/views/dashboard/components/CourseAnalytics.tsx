import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Badge, Button, Checkbox, Table } from "flowbite-react";
import { useLocation } from "react-router-dom";
import DailyRevenueChart from "./DailyRevenueChart";
import WeeklyRevenueChart from "./WeeklyRevenueChart";
import { useState } from "react";

const CourseAnalytics = () => {
  const locationState = useLocation().state;
  const [SelectAll, setSelectAll] = useState<boolean>(false);

  return (
    <div className="p-6">
      <Button href="#my-courses" className="w-fit bg-dominance text-white mb-8">
        <ChevronLeftIcon className="w-5 mr-4" />
        <span className="text-sm font-semibold">Go back</span>
      </Button>
      <div className="space-y-4">
        <div className="space-y-2">
          <span className="text-gray-600 text-sm block">Course Title</span>
          <h1 className="font-semibold text-3xl font-league-spartan border-b-2 pb-1 w-fit">
            {locationState}
          </h1>
        </div>
        {/*  */}
        <div className="grid grid-cols-3 gap-4">
          {/* FIRST  */}
          <div className="p-4 space-y-4 bg-shade border rounded-xl">
            <h4 className="text-xs text-gray-500 font-medium">Total Sales</h4>
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
            <h4 className="text-xs text-gray-500 font-medium">
              Total Students
            </h4>
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
            <h4 className="text-xs text-gray-500 font-medium">Total Revenue</h4>
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
        {/*  */}
        <div className=" grid grid-cols-2 gap-4">
          <DailyRevenueChart />
          <WeeklyRevenueChart />
        </div>
        {/*  */}
        <div className="overflow-hidden border rounded-lg bg-shade">
          <div className="flex justify-between items-center text-sm font-medium border-b px-6 py-4">
            <p className="font-league-spartan font-semibold text-xl">
              Revenue Breakdown
            </p>
          </div>
          <Table>
            <Table.Head className="text-base text-peace">
              <Table.HeadCell className="bg-dominance group-first/head:first:rounded-none">
                <Checkbox
                  onChange={(e) => setSelectAll(e.target.checked)}
                  className="enabled:checked:bg-success"
                />
              </Table.HeadCell>
              <Table.HeadCell className="bg-dominance">Name</Table.HeadCell>
              <Table.HeadCell className="bg-dominance">Email</Table.HeadCell>
              <Table.HeadCell className="bg-dominance">Date</Table.HeadCell>
              <Table.HeadCell className="bg-dominance">
                Coupon Used
              </Table.HeadCell>
              <Table.HeadCell className="bg-dominance group-first/head:last:rounded-none">
                Action
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="text-gray-600">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                <Table.Row key={e}>
                  <Table.Cell>
                    <Checkbox
                      checked={SelectAll}
                      className="enabled:checked:bg-dominance ring ring-success"
                    />
                  </Table.Cell>
                  <Table.Cell>Yahaya Muhammad Bello</Table.Cell>
                  <Table.Cell>mbya****79@gmail.com</Table.Cell>
                  <Table.Cell>Today, 12 Nov, 2024</Table.Cell>
                  <Table.Cell>
                    <Badge className="w-fit bg-success text-dominance">
                      BLK Friday
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="flex gap-2 items-center">
                    <Button size="xs" className="rounded-md" color="light">
                      Send Mail
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default CourseAnalytics;
