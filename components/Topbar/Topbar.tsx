"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTheme } from "@/app/hooks/useTheme";

const userData = {
  user: {
    initials: "MS",
    name: "Manoj Sharma",
    role: "Super Admin",
  },
  dropdownItems: [
    { label: "Profile", type: "normal" },
    { label: "Settings", type: "normal" },
    { label: "Logout", type: "danger" },
  ],
};

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, dropdownItems } = userData;
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div className="w-full flex items-center justify-between px-4 h-[64px] border-b border-[var(--border-color)] bg-[var(--background-section)] relative transition-colors duration-300">
        <div className="block lg:hidden">
          <Image src={isDark ? "/images/topbar/phone-menu-dark.svg" : "/images/topbar/phone-menu.svg"}
            alt="Menu"
            width={16}
            height={16}
            className="cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        <div className="hidden lg:flex items-center gap-18">
          <Image src={isDark ? "/images/logo-dark.svg" : "/images/logo.svg"}
            alt="Logo" width={132} height={32} />
          <div className="border border-[var(--border-color)] rounded-full p-[8px]">
            <Image src={isDark ? "/images/topbar/frame-dark.svg" : "/images/topbar/frame.svg"}
              alt="Frame Icon" width={16} height={16} />
          </div>
        </div>

        <div className="hidden sm:flex bg-[var(--background-main)] border border-[var(--border-color)] items-center rounded-[12px] px-3 h-[38px] md:w-[320px] lg:w-[528px]">
          <Image src={isDark ? "/images/topbar/search-dark.svg" : "/images/topbar/search.svg"}
            alt="Search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2 w-full text-sm text-[var(--text-color)] placeholder-[var(--text-color)]"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Image
            src={isDark ? "/images/topbar/light.svg" : "/images/topbar/dark.svg"}
            alt="Toggle Theme"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={toggleTheme}
          />
          <div className="flex items-center justify-center border border-[var(--border-color)] rounded-[12px] shadow-lg w-[38px] h-[38px]">
            <Image src={isDark ? "/images/topbar/notifications-dark.svg" : "/images/topbar/notifications.svg"}
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
                <p className="text-sm font-medium text-[var(--text-color)]">{user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.role}</p>
              </div>
              <ChevronDownIcon className="w-6 h-6 text-[var(--text-color)]" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[var(--background-section)] border border-[var(--border-color)] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-50">
                <ul className="text-sm text-[var(--text-color)]">
                  {dropdownItems.map((item, index) => (
                    <li
                      key={item.label}
                      className={`px-4 py-2 transition-all cursor-pointer
                        ${item.type === "danger" ? "text-[#dc3545] hover:bg-[#fff0f0] dark:hover:bg-[#331010] rounded-b-lg" : ""}
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

      {/* Mobile Search Bar */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[var(--background-section)] border-t border-[var(--border-color)] px-4 py-4 space-y-4">
          <div className="flex items-center border border-[var(--border-color)] rounded-[12px] px-3 h-[38px] bg-[var(--background-section)]">
            <Image src={isDark ? "/images/topbar/search-dark.svg" : "/images/topbar/search.svg"}
              alt="Search" width={16} height={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full text-sm text-[var(--text-color)] placeholder-[var(--text-color)]"
            />
          </div>
        </div>
      )}
    </>
  );
}
