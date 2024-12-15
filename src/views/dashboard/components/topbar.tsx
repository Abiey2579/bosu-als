"use client";

import { BellAlertIcon } from "@heroicons/react/24/outline";
import { Avatar, Dropdown } from "flowbite-react";
import { URIPaths } from "../../../util/URIPaths";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface UserSession {
  user?: {
    email?: string;
  };
}

const TopBar = () => {
  const [userData, setUserData] = useState<UserSession | null>(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const userSession = sessionStorage.getItem("userSession");
    if (!userSession) {
      navigateTo(URIPaths.SignIn);
      return;
    }

    try {
      const parsedSession: UserSession = JSON.parse(userSession);
      setUserData(parsedSession);
    } catch (error) {
      console.error("Failed to parse user session:", error);
      navigateTo(URIPaths.SignIn);
    }
  }, [navigateTo]);

  return (
    <div className="flex items-center justify-end w-full px-2 py-4 border-b">
      <div className="flex gap-4 items-center">
        <BellAlertIcon className="w-6 cursor-pointer text-slate-400 hover:text-slate-600" />
        <hr className="rotate-90 w-6" />
        <Dropdown
          inline
          label={
            <div className="flex items-center gap-4">
              <Avatar alt="User settings" size="sm" rounded />
              <span className="text-sm font-semibold">
                {userData?.user?.email || "Guest"}
              </span>
            </div>
          }
        >
          <Dropdown.Item onClick={() => navigateTo(URIPaths.SignIn)}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;
