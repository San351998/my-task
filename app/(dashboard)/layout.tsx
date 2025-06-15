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
            <div className="flex-col xl:flex-row flex bg-[#f6f8f9] h-full lg:h-[calc(100vh-129px)] w-full">
                <div className="">
                    <Sidebar />
                </div>
                <main className="flex-1 overflow-y-auto px-4 lg:pr-0 mb-8 max-w-full">{children}</main>
            </div>
            {/* </Container> */}
        </>
    );
}
