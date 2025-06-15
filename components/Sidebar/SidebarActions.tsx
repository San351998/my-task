import Image from "next/image";

const actions = ['Email', 'Call', 'Message', 'Calendar'];

export default function SidebarActions() {
  return (
    <div className="bg-white flex justify-around py-4 rounded-xl border border-gray-200">
      {actions.map((action, index) => (
        <div
          key={action}
          className={`flex flex-col items-center text-xs text-[#0E253C] cursor-pointer hover:text-[#513CCE] px-4 ${index !== 0 ? 'border-l border-[#e7e9ec]' : ''
            }`}
        >
          <Image
            src={`/images/sidebar/${action.toLowerCase()}.svg`}
            alt={action}
            width={18}
            height={18}
            className={`${action === 'Email' ? 'h-[17px]' : ''}`}
          />
          <span className="mt-2">{action}</span>
        </div>
      ))}
    </div>
  );
}
