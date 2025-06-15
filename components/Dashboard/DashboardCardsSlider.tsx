"use client";

import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const sliderItems = [
  {
    title: "Total Orders",
    value: "123",
    icon: "/images/tabs/dashboard/1.svg",
    percent: "+28%",
    color: "text-green-500",
    trendIcon: "/images/tabs/dashboard/up.svg",
  },
  {
    title: "Total Taken",
    value: "123",
    icon: "/images/tabs/dashboard/2.svg",
    percent: "-15%",
    color: "text-red-500",
    trendIcon: "/images/tabs/dashboard/down.svg",
  },
  {
    title: "Total Revenue",
    value: "$1234.99",
    icon: "/images/tabs/dashboard/3.svg",
    percent: "+28%",
    color: "text-green-500",
    trendIcon: "/images/tabs/dashboard/up.svg",
  },
  {
    title: "Pending Orders",
    value: "$1234.99",
    icon: "/images/tabs/dashboard/4.svg",
    percent: "-28%",
    color: "text-red-500",
    trendIcon: "/images/tabs/dashboard/down.svg",
  },
  {
    title: "Pending Returns",
    value: "$1234.99",
    icon: "/images/tabs/dashboard/5.svg",
    percent: "-28%",
    color: "text-red-500",
    trendIcon: "/images/tabs/dashboard/down.svg",
  },
];

const Arrow = ({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) => {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${direction === "left" ? "-left-0" : "-right-0"
        } transform -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 p-1 rounded-full shadow-md z-10 transition hidden sm:flex items-center justify-center`}
    >
      <Icon className="h-3 w-3 text-[#0E253C]" />
    </button>
  );
};

export default function DashboardCardsSlider() {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { dots: true, arrows: false, slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative bg-[var(--card-bg)] pb-6 sm:py-6 px-2 max-w-6xl overflow-hidden mb-5 sm:mb-0">
      <Slider {...sliderSettings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-[var(--background-section)] rounded-[12px] shadow-sm h-full border border-[var(--border-color)]">
              <div className="flex items-center space-x-4 p-4">
                <Image src={item.icon} alt={item.title} width={54} height={54} />
                <div>
                  <p className="text-sm text-[var(--text-color)] opacity-80">{item.title}</p>
                  <p className="text-[22px] font-bold text-[var(--text-color)]">{item.value}</p>
                </div>
              </div>
              <div className="bg-[var(--card-bg)] flex justify-between items-center border-t border-[var(--border-color)] px-4 py-3 rounded-b-[12px]">
                <div className="flex items-center gap-1">
                  <Image src={item.trendIcon} alt="trend" width={12} height={12} />
                  <span className={`text-sm font-medium ${item.color}`}>{item.percent}</span>
                </div>
                <span className="text-xs text-[var(--text-color)] opacity-80">From The Last Month</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
