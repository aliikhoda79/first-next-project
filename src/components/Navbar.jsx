"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ButtonLogout from "../components/ButtonLogout";
const Navbar = () => {
  const pathName = usePathname();
  const [navbar, setNavbar] = useState(false);
  const handleSideBar = (e) => {
    setNavbar(!navbar);
    console.log(navbar);
  };
  const pathStyleHandler = (path) => {
    if (pathName.includes(path)) {
      if (path === "/") return "scale-125 font-bold ";
      else if (path === "/shop") return " md:bg-blue-600  scale-125 ";
      else if (path === "/blogs") return " bg-red-600 scale-125 shadow-lg ";
      else if (path === "/contact")
        return "md:shadow-lg bg-yellow-600 scale-125 ";
      else if (path === "/about-us")
        return "md:bg-pink-600 shadow-lg scale-125 ";
      else return "hover:shadow-lg hover:bg-white/30 hover:scale-110";
    }
    return "hover:shadow-lg hover:bg-white/30 hover:scale-110";
  };

  return (
    <>
      <button className="md:hidden" onClick={handleSideBar}>Ξ</button>
      {navbar && (
        <div onClick={handleSideBar} className="bg-zinc-700/60 z-20 w-screen fixed left-0 top-0 h-screen">
          <nav className="w-1/3 h-screen text-black  flex flex-col bg-white">
            <button onClick={handleSideBar} className=" w-full  ">
              X
            </button>
            <ul className="mt-8 pr-3 text-[16px] flex flex-col gap-y-5">
              <li className="">
                <Link href={"/"}>home</Link>
              </li>
              <li className="">
                <Link href={"/blogs"}>blogs</Link>
              </li>
              <li className="">
                <Link href={"/shop"}>shop</Link>
              </li>
              <li className="">
                <Link href={"/contact"}>contact us</Link>
              </li>
              <li className="">
                <Link href={"/about-us"}>about us</Link>
              </li>
            </ul>
            <ButtonLogout />
          </nav>
        </div>
      )}
      <nav
        className="md:flex hidden 
    gap-6 px-2 items-center h-full "
      >
        <div className="h-[80px] relative group">
          <Link
            href={"/"}
            className={`${pathStyleHandler(
              "/"
            )} text-[16px] px-2 rounded-br-lg  rounded-bl-lg block leading-[70px] transition-all  `}
          >
            home
          </Link>
        </div>
        <div className="h-[80px]  relative group">
          <Link
            href={"/blogs"}
            className={`${pathStyleHandler(
              "/blogs"
            )} text-[16px] px-2 rounded-br-lg  rounded-bl-lg block leading-[70px] transition-all `}
          >
            blogs
          </Link>
        </div>
        <div className="h-[80px] relative group">
          <Link
            href={"/shop"}
            className={`${pathStyleHandler(
              "/shop"
            )} text-[16px] px-2 rounded-br-lg  rounded-bl-lg block leading-[70px] transition-all `}
          >
            shop
          </Link>
        </div>
        <div className="h-[80px]  relative group">
          <Link
            href={"/contact"}
            className={`${pathStyleHandler(
              "/contact"
            )} text-[16px] px-2 rounded-br-lg  rounded-bl-lg block leading-[70px] transition-all `}
          >
            contact us
          </Link>
        </div>
        <div className="h-[80px]  relative group">
          <Link
            href={"/about-us"}
            className={`${pathStyleHandler(
              "/about-us"
            )} text-[16px] px-2 rounded-br-lg  rounded-bl-lg block leading-[70px] transition-all `}
          >
            about us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
