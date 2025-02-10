import Link from "next/link";

export default function Navbar() {
  const linkList = [
    { name: "首页", link: "/" },
    { name: "博客", link: "/blog" },
  ];
  return (
    <>
      <div className="w-[30vw] h-[4.5vh] mx-auto mt-3 bg-[#D6C6E1] rounded-full">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full justify-evenly">
            {linkList.map((item) => (
              <div key={item.name} className="text-lg p-1 rounded-lg">
                <Link href={item.link}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
