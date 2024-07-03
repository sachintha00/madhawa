"use client";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {children} <FloatingButton />
    </div>
  );
};

export default DashboardLayout;
