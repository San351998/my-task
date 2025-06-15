"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const userData = {
    "user": {
        "initials": "MS",
        "name": "Manoj Sharma",
        "role": "Super Admin"
    },
    "dropdownItems": [
        { "label": "Profile", "type": "normal" },
        { "label": "Settings", "type": "normal" },
        { "label": "Logout", "type": "danger" }
    ]
}

export default function Topbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const { user, dropdownItems } = userData;

    return (
        <div className="w-full flex items-center justify-between px-4 h-[64px] border-b border-[#e7e9ec] bg-white relative">
            <div className="flex items-center gap-18">
                <Image src="/images/logo.svg" alt="Logo" width={132} height={32} />
                <div className="border border-[#e7e9ec] rounded-full p-[8px]">
                    <Image src="/images/topbar/frame.svg" alt="Frame Icon" width={16} height={16} />
                </div>
            </div>

            <div className="bg-white border border-[#e7e9ec] flex items-center rounded-[12px] px-3 h-[38px] w-[528px]">
                <Image src="/images/topbar/search.svg" alt="Search" width={16} height={16} />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none ml-2 w-full text-sm placeholder-[#0E253C]"
                />
            </div>

            <div className="flex items-center space-x-4">
                <Image
                    src="/images/topbar/dark.svg"
                    alt="Dark Mode"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
                <div className="flex items-center justify-center border border-[#e7e9ec] rounded-[12px] shadow-lg w-[38px] h-[38px]">
                    <Image
                        src="/images/topbar/notifications.svg"
                        alt="Notifications"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    />
                </div>
                <div className="relative">
                    <div
                        className="flex items-center space-x-4 cursor-pointer"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <div className="bg-[#513CCE] text-white w-[36px] h-[36px] flex items-center justify-center rounded-full font-semibold text-sm">
                            {user.initials}
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.role}</p>
                        </div>
                        <ChevronDownIcon className="w-6 h-6 text-[#0E253C]" />
                    </div>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e7e9ec] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-50">
                            <ul className="text-sm text-[#0E253C]">
                                {dropdownItems.map((item, index) => (
                                    <li
                                        key={item.label}
                                        className={`px-4 py-2 transition-all cursor-pointer hover:bg-[#f5f6f7]
                                            ${item.type === "danger" ? "text-[#dc3545] hover:bg-[#fff0f0] rounded-b-lg" : ""}
                                            ${index === 0 ? "rounded-t-lg" : ""}
                                        `}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
