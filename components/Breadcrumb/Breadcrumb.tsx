"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname(); 
  const pathSegments = pathname.split("/").filter(Boolean); 

  const format = (str: string) =>
    str
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");

  return (
    <div className="bg-white text-md text-[#0E253C] px-4 py-5 border-b border-[#e7e9ec]">
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const isLast = index === pathSegments.length - 1;
        return (
          <span key={href}>
            {!isLast ? (
              <>
                <Link href={href} className="text-[#0E253C] opacity-[85%] hover:underline">
                  {format(segment)}
                </Link>
                {" / "}
              </>
            ) : (
              <span className="font-semibold text-[#0E253C]">{format(segment)}</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
