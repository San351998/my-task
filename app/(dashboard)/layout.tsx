import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Topbar />
            <Breadcrumb />
            <div className="flex bg-[#f6f8f9] h-[calc(100vh-129px)]">
                <Sidebar />
                <main className="flex-1 px-4">{children}</main>
            </div>
        </>
    );
}
