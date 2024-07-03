"use client";
import Logo from "@/app/_lib/components/Logo/Logo";
import React from "react";

interface SidebarHeaderProps {
  collapsed: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ collapsed }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center">
        <Logo />
        <div
          className={`text-[1.1rem] ml-1 font-bold duration-1000 text-secondary-foreground ${
            collapsed ? "hidden duration-1000" : "block duration-1000"
          }`}
        >
          ADHAWA
        </div>
      </div>
      <span
        className={`${
          collapsed ? "hidden" : "block"
        } font-semibold text-gray-medium text-[12px]`}
      >
        v1.1.0
      </span>
    </div>
  );
};

export default SidebarHeader;
