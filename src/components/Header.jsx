"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
const Header = () => {

  const { data, status } = useSession();
  
  const [name, setName] = useState("");
  const [auth, setAuth] = useState();
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolled(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setName(data.user.name[0]);
      setAuth(data.user.name[1]);
    }
  }, [data]);
  return (
    <div
      className={`${
        scrolled >= 70 ? "bg-slate-500" : ''
      } z-10 fixed  flex contains transition-all ease-linear items-center justify-between top-0 w-full gap-x-6 min-h-[80px]`}
    >
      <Link
        href={"/"}
        className="logo max-md:absolute left-[40%] ml-4 text-4xl font-extrabold  w-[100px] h-[60px]"
      >
        logo
      </Link>
      <Navbar />

      {status === "authenticated" ? (
        <div className="mr-auto bg-emerald-700 rounded-lg ">
          {name && (
            <Link
              className="block text-sm p-2 md:py-2 md:px-4 w-full h-full"
              href={"/dashboard"}
            >
              {name}
            </Link>
          )}
        </div>
      ) : (
        <button className="mr-auto rounded-xl border">
          <Link
            className="inline-block text-sm p-2 md:py-2 md:px-4 w-full h-full"
            href={"/signIn"}
          >
            sign in / login
          </Link>
        </button>
      )}
    </div>
  );
};

export default Header;
