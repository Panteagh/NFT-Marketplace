import React from "react";

function ListSkeleton() {
  return (
    <>
      <div class="animate-pulse flex flex-col items-center gap-4 w-full mt-4">
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
        <div class="h-16 bg-[#3B3B3B] w-full rounded-3xl"></div>
      </div>
    </>
  );
}

export default ListSkeleton;
