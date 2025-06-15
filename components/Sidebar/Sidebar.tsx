'use client';

import BusinessDetails from "../BusinessDetails/BusinessDetails";
import SidebarActions from "./SidebarActions";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
    return (
        <div className="w-full xl:w-[410px] p-4 space-y-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 items-center justify-between">
                <SidebarHeader />
                <SidebarActions />
            </div>
            <BusinessDetails />
        </div>
    );
}
