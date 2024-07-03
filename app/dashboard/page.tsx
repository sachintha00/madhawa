"use client";
import { useState } from "react";
import DashboardLayout from "../_lib/layouts/DashboardLayout/DashboardLayout";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-secondary border-[1px] border-border text-foreground">
          Test new
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 border-[1px] border-border text-subText">
          Test new
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-secondary border-[1px] border-border text-foreground">
          Test new
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 border-[1px] border-border text-subText">
          Test new
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-secondary border-[1px] border-border text-foreground">
          Test new
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 border-[1px] border-border text-subText">
          Test new
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
