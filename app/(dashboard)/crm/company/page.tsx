"use client";

import React, { useState } from "react";
import DashboardCardsSlider from "@/components/Dashboard/DashboardCardsSlider";
import OrderStatus from "@/components/Dashboard/OrderStatus";
import RecentActivities from "@/components/Dashboard/RecentActivities";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import Revenue from "@/components/Dashboard/Revenue";

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    "Dashboard",
    "Orders",
    "Address",
    "Notes",
    "Tasks",
    "Contacts",
    "Credit History",
  ];

  return (
    <div className="">
      <div className="overflow-x-auto">
        <div className="flex space-x-1 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 text-sm font-medium !border-b-0 border rounded-t-[12px] 
                border-[var(--border-color)] cursor-pointer
                ${
                  activeTab === tab
                    ? "pt-3 pb-3 bg-[var(--card-bg)] text-[#513CCE]"
                    : "pt-2 pb-2 mt-[5px] text-[var(--text-color)] bg-[var(--background-section)]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full bg-[var(--card-bg)] pt-4 lg:pt-6 border border-[var(--border-color)] rounded-tr-[12px] rounded-b-[12px] h-[calc(100vh-190px)] overflow-y-auto">
        {activeTab === "Dashboard" ? (
          <>
            <DashboardCardsSlider />
            <div className="mx-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
              <OrderStatus />
              <RecentActivities />
            </div>
            <RecentOrders />
            <Revenue />
          </>
        ) : (
          <div className="text-sm text-[var(--text-color)] mt-4 p-4 opacity-60">
            No data found
          </div>
        )}
      </div>
    </div>
  );
}
