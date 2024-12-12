import { Tabs } from "flowbite-react";
import { TabTheme } from "../../../util/Flowbite";
import {
  SwatchIcon,
  LockOpenIcon,
  CodeBracketSquareIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const Settings = () => {
  return (
    <div className="px-6 pb-4 pt-8 space-y-8 flex-1">
      <h1 className="font-semibold text-2xl font-league-spartan">
        Account Settings
      </h1>

      <Tabs
        theme={TabTheme}
        aria-label="Tabs with underline"
        variant="underline"
      >
        <Tabs.Item active title="Change Password" icon={LockOpenIcon}>
          Change Password
        </Tabs.Item>
        <Tabs.Item active title="Theme" icon={SwatchIcon}>
          Theme
        </Tabs.Item>
        <Tabs.Item active title="API Key" icon={CodeBracketSquareIcon}>
          API Key
        </Tabs.Item>
        <Tabs.Item
          active
          title="User Guide (Documentation)"
          icon={DocumentCheckIcon}
        >
          User Guide (Documentation)
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Settings;
