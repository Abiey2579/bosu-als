import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { Button, Table } from "flowbite-react";
import SaveTimeTable from "./SaveTimeTable";
import { useState } from "react";

const Overview = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="px-6 pb-4 pt-8 space-y-4 flex-1">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Account Overview</h1>
        <Button onClick={() => setOpenModal(true)}>Create Time Table</Button>
        <SaveTimeTable openModal={openModal} setOpenModal={setOpenModal} />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4">
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

      {/* GENERATE TIME TABLE */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="text-black">Title</Table.HeadCell>
            <Table.HeadCell className="text-black">Date Created</Table.HeadCell>
            <Table.HeadCell className="text-black">Created By</Table.HeadCell>
            <Table.HeadCell className="text-black">
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {[1, 2, 3, 4].map(() => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  First Semester 2020/2021 Academic Session
                </Table.Cell>
                <Table.Cell>1st Nov, 2024</Table.Cell>
                <Table.Cell>Abubakar Grema</Table.Cell>
                <Table.Cell>
                  <Button size="xs">Download</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Overview;
