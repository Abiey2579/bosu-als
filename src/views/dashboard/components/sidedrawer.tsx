"use client";

import {
  PresentationChartBarIcon,
  UsersIcon,
  // VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Drawer } from "flowbite-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DrawerTheme } from "../../../util/Flowbite";

export const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const activePage = useLocation().hash;

  const nonActivePageClass =
    "flex items-center gap-3 w-full hover:bg-gray-100 hover:text-gray-800 p-2 text-white rounded";
  const activePageClass =
    "flex items-center gap-3 w-full bg-gray-100 p-2 rounded text-gray-800";

  return (
    <Drawer
      backdrop={false}
      open={isOpen}
      onClose={handleClose}
      className="max-w-72 px-6 relative"
      theme={DrawerTheme}
    >
      <Drawer.Items className="h-full flex flex-col justify-between">
        <div>
          <h1 className="py-2 font-bold text-xl text-white border-b border-gray-600 mb-12">
            BOSU ALS
          </h1>
          <h5 className="text-xs font-medium text-gray-300 my-6">Navigation</h5>
          <div className="space-y-2 text-sm">
            <a
              href="#overview"
              className={
                activePage === "#overview" || activePage === ""
                  ? activePageClass
                  : nonActivePageClass
              }
            >
              <PresentationChartBarIcon className="w-5 " />
              <span className="font-medium ">Overview</span>
            </a>
            <a
              href="#create-timetable"
              className={
                activePage === "#create-timetable"
                  ? activePageClass
                  : nonActivePageClass
              }
            >
              <PresentationChartBarIcon className="w-5 " />
              <span className="font-medium ">Create Timetable</span>
            </a>
            {/* <a
              href="#my-courses"
              className={
                activePage === "#my-courses"
                  ? activePageClass
                  : nonActivePageClass
              }
            >
              <VideoCameraIcon className="w-5 " />
              <span className="font-medium ">Access Control</span>
            </a> */}
            <a
              href="#logs"
              className={
                activePage === "#logs" ? activePageClass : nonActivePageClass
              }
            >
              <UsersIcon className="w-5 " />
              <span className="font-medium ">Schedule Logs</span>
            </a>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};
