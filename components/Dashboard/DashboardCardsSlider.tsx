"use client";

import React from "react";
import Slider from "react-slick";
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

export default function DashboardCardsSlider() {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { dots:true, slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white pb-6 sm:pb-6 sm:py-6 px-2 max-w-6xl overflow-hidden mb-5 sm:mb-0">
      <Slider {...sliderSettings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-[#f6f8f9] rounded-2xl shadow-sm h-full border border-[#e7e9ec]">
              <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} width={54} height={54} />
                </div>
                <div>
                  <p className="text-sm text-[#0E253C] opacity-80">{item.title}</p>
                  <p className="text-[22px] font-bold text-[#0E253C]">{item.value}</p>
                </div>
              </div>
              <div className="bg-white flex justify-between items-center border-t border-[#e7e9ec] px-4 py-3 rounded-b-[12px]">
                <div className="flex items-center gap-1">
                  <Image src={item.trendIcon} alt="trend" width={12} height={12} />
                  <span className={`text-sm font-medium ${item.color}`}>{item.percent}</span>
                </div>
                <span className="text-xs text-[#0E253C] opacity-80">From The Last Month</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
