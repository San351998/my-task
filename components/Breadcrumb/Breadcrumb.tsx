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
    <div className="w-full bg-[var(--background-section)] text-md text-[var(--text-color)] px-4 py-5 border-b border-[var(--border-color)] transition-colors duration-300">
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const isLast = index === pathSegments.length - 1;
        return (
          <span key={href}>
            {!isLast ? (
              <>
                <Link
                  href={href}
                  className="text-[var(--text-color)] opacity-[85%] hover:underline"
                >
                  {format(segment)}
                </Link>
                {" / "}
              </>
            ) : (
              <span className="font-semibold text-[var(--text-color)]">
                {format(segment)}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
