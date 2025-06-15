"use client";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftEllipsisIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const actions = [
  { label: "Email", icon: EnvelopeIcon },
  { label: "Call", icon: PhoneIcon },
  { label: "Message", icon: ChatBubbleLeftEllipsisIcon },
  { label: "Calendar", icon: CalendarDaysIcon },
];

export default function SidebarActions() {
  return (
    <div className="w-full bg-[var(--background-section)] flex justify-around py-5 lg:py-4 rounded-xl border border-[var(--border-color)]">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <div
            key={action.label}
            className={`flex flex-col items-center text-xs text-[var(--text-color)] cursor-pointer hover:text-[var(--accent-color)] px-4 sm:px-8 lg:px-4 ${index !== 0 ? "border-l border-[var(--border-color)]" : ""
              }`}
          >
            <Icon
              className="w-5 h-5 text-[var(--text-color)] dark:text-white transition duration-200"
            />
            <span className="mt-2">{action.label}</span>
          </div>
        );
      })}
    </div>
  );
}
