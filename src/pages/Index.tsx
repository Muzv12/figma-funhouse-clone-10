import React from "react";
import { Header } from "../components/Header";
import { NavigationTabs } from "../components/NavigationTabs";
import { FiltersSidebar } from "../components/FiltersSidebar";
import { DataTable } from "../components/DataTable";
import { Pagination } from "../components/Pagination";

export default function Index() {
  return (
    <div className="bg-[rgba(234,242,255,1)] overflow-hidden pt-[9px] min-h-screen">
      <Header />
      
      <main className="mt-4">
        <NavigationTabs />
        
        <div className="z-10 ml-[13px] -mt-2.5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[24%] max-md:w-full max-md:ml-0">
              <FiltersSidebar />
            </div>
            
            <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <DataTable />
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
