"use client";

import React, { useState } from "react";
import DashboardCardsSlider from "@/components/Dashboard/DashboardCardsSlider";
import OrderStatus from "@/components/Dashboard/OrderStatus";
import RecentActivities from "@/components/Dashboard/RecentActivities";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import Revenue from "@/components/Dashboard/Revenue";

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = ["Dashboard", "Orders", "Address", "Notes", "Tasks", "Contacts", "Credit History"];

  return (
    <div className="">
      <div className="overflow-x-auto">
        <div className="flex space-x-1 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 text-sm font-medium !border-b-0 border rounded-t-[12px] border-[#e7e9ec] cursor-pointer ${activeTab === tab
                  ? "pt-3 pb-3 bg-white text-[#513CCE]"
                  : "pt-2 pb-2 mt-[5px] text-gray-500 border"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>


      {/* Tab Content */}
      <div className="w-full bg-white pt-4 lg:pt-6 border border-[#e7e9ec] rounded-tr-[12px] rounded-b-[12px] h-[calc(100vh-190px)] overflow-y-auto">
        {activeTab === "Dashboard" && (
          <>
            <DashboardCardsSlider />
            <div className="mx-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
              <OrderStatus />
              <RecentActivities />
            </div>
            <RecentOrders />
            <Revenue />
          </>
        )}

        {activeTab !== "Dashboard" && (
          <div className="text-gray-500 text-sm mt-4 p-4">
            No data found
          </div>
        )}
      </div>
    </div>
  );
}
