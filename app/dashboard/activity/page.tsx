"use client";

import CommonLayout from "@/app/_lib/layouts/CommonLayout/CommonLayout";

const Activity = () => {
  return (
    <CommonLayout
      headerTitle="Title Section"
      headerDescription="Description section"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-subText">
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 1
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 2
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 3
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 4
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 5
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 6
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 7
        </div>
        <div className="border-[1px] border-border bg-secondary p-4">
          Item 8
        </div>
      </div>
    </CommonLayout>
  );
};

export default Activity;
