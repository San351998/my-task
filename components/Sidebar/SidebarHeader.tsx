export default function SidebarHeader() {
  return (
    <div className="w-full flex justify-between px-4 py-4 bg-white border border-[#e7e9ec] rounded-xl">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#513CCE] text-white font-semibold flex items-center justify-center text-lg overflow-hidden">
            TG
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#22C55E] border-[3px] border-white rounded-full z-10" />
            <div className="absolute bottom-0 w-full bg-white/20 text-white text-[11px] text-center pb-[2px] pt-[2px] font-normal cursor-pointer">
              Edit
            </div>
          </div>
        </div>
        <div>
          <p className="text-md font-semibold text-[#0E253C]">
            Truck Gear
            <span className="text-[10px] bg-[#fcf4e9] text-[#E48D21] px-2 py-[1px] rounded-full ml-2">BUSINESS</span>
          </p>
          <p className="text-xs text-gray-500">jillali@onechanneladmin.com</p>
        </div>
      </div>
      <p className="mt-1 text-xs text-[#513CCE] font-medium cursor-pointer">Change Status</p>
    </div>
  );
}
