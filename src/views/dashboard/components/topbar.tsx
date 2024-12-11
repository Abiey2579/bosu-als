"use client";

import { BellAlertIcon } from "@heroicons/react/24/outline";
import { Avatar, Dropdown } from "flowbite-react";
import { URIPaths } from "../../../util/URIPaths";

const TopBar = () => {
  return (
    <div className="flex items-center justify-end w-full px-2 py-4 border-b">
      <div className="flex gap-4 items-center">
        <BellAlertIcon className="w-6 cursor-pointer text-slate-400 hover:text-slate-600" />
        <hr className="rotate-90 w-6" />
        <Dropdown
          inline
          label={
            <div className="flex items-center gap-4">
              <Avatar alt="User settings" size={"sm"} rounded />
              <span className="text-sm font-semibold">Marques Brownlee</span>
            </div>
          }
        >
          <Dropdown.Item href={URIPaths.SignIn}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;
