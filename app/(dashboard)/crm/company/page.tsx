"use client";

import React, { useState } from "react";
import DashboardCardsSlider from "@/components/Dashboard/DashboardCardsSlider";
import OrderStatus from "@/components/OrderStatus/OrderStatus";

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = ["Dashboard", "Orders", "Address", "Notes", "Tasks", "Contacts", "Credit History"];

  return (
    <div className="">
      {/* Tabs */}
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 text-sm font-medium !border-b-0 border rounded-t-[12px] border-[#e7e9ec] cursor-pointer ${activeTab === tab
              ? "pt-3 pb-3 bg-white text-[#513CCE] "
              : "pt-2 pb-2 mt-[5px] text-gray-500 border "
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white pt-6 border border-[#e7e9ec] rounded-b-[12px]">
        {activeTab === "Dashboard" && (
          <>
            <DashboardCardsSlider />
            <div className="grid grid-cols-2 gap-4">
              <OrderStatus />
              <p>asdsad</p>
            </div>
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
