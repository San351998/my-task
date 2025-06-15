import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Container from "@/components/Common/Container";
import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {/* <Container> */}
            <Topbar />
            <Breadcrumb />
            <div className="flex-col xl:flex-row flex bg-[var(--background-main)] h-full lg:h-[calc(100vh-129px)] w-full transition-colors duration-300">
                <div>
                    <Sidebar />
                </div>
                <main className="flex-1 overflow-y-auto px-4 lg:pr-0 mb-8 max-w-full text-[var(--text-color)] transition-colors duration-300">
                    {children}
                </main>
            </div>
            {/* </Container> */}
        </>
    );
}
