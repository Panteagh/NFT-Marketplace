import React from "react";

function ListSkeleton() {
  return (
    <>
      <div className="animate-pulse flex flex-col items-center gap-4 w-full mt-4">
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div className="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
      </div>
    </>
  );
}

export default ListSkeleton;
