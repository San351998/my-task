'use client';

import BusinessDetails from "../BusinessDetails/BusinessDetails";
import SidebarActions from "./SidebarActions";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
    return (
        <div className="w-[410px] p-4 space-y-4">
            <SidebarHeader />
            <SidebarActions />
            <BusinessDetails />
        </div>
    );
}
