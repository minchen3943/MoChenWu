"use client";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const linkList = [
    { name: "首页", link: "/" },
    { name: "博客", link: "/blog" },
    { name: "评论", link: "/comment" },
    { name: "关于", link: "/about" },
  ];
  return (
    <>
      <div className="w-[80vw] lg:w-[25vw] h-[6vh] lg:h-[4.5vh] mx-auto my-3 border-[#5b5b5b35] bg-[#ffffffcc] rounded-full drop-shadow-lg border">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full h-full justify-evenly">
            {linkList.map((item) => (
              <div
                key={item.name}
                className={`text-lg  rounded-lg font-sans w-16 h-full text-center relative ${
                  pathname === item.link
                    ? "text-[#9A73B5]"
                    : "text-[#4A4A4A] hover:text-[#D6C6E1]"
                }`}>
                <Link href={item.link} className="h-full w-full block p-1">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
