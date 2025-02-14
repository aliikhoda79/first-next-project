"use client";
import Link from "next/link";
import ButtonLogOut from "../ButtonLogout";
import { usePathname } from "next/navigation";
const Dashboard = ({ session, children }) => {
  const pathURL = usePathname();
  
     
    // if (pathURL === path)
    //   return "md:rounded-tr-full  md:rounded-br-full max-md:rounded-full bg-slate-950 text-white md:translate-x-[-15px]";
    // else return "hover:bg-slate-200 rounded-tr-full  rounded-br-full ";
  
  const role = session.user.name[1];
  console.log(role);
  return (
    <div className="text-black h-[90vh] relative w-full flex flex-col-reverse md:flex-row">
      <div className="bg-white gap-2 max-md:justify-center max-md:h-fit cstm-height z-10 pr-3 max-md:fixed bottom-0 py-3 md:py-6 w-full sticky flex md:flex-col md:w-[20%] ">
        <Link
          href={"/dashboard"}
          className={`${pathURL==='/dashboard'?'md:rounded-tr-full  md:rounded-br-full max-md:rounded-full bg-slate-950 text-white md:translate-x-[-15px]':"hover:bg-slate-200 rounded-tr-full  rounded-br-full"}     transition-all p-3 block `}
        >
          home
        </Link>
        {role === "ADMIN" && (
          <Link
            href={"/dashboard/users"}
            className={`${pathURL.startsWith('/dashboard/users')?'md:rounded-tr-full  md:rounded-br-full max-md:rounded-full bg-slate-950 text-white md:translate-x-[-15px]':"hover:bg-slate-200 rounded-tr-full  rounded-br-full"}     transition-all p-3 block `}
          >
            users
          </Link>
        )}
        <Link
          href={"/dashboard/blogs"}
          className={`${pathURL.startsWith('/dashboard/blogs')?'md:rounded-tr-full  md:rounded-br-full max-md:rounded-full bg-slate-950 text-white md:translate-x-[-15px]':"hover:bg-slate-200 rounded-tr-full  rounded-br-full"}     transition-all p-3 block `}
        >
          blogs
        </Link>
        <Link
          href={"/dashboard/products"}
          className={`${pathURL.startsWith('/dashboard/products')?'md:rounded-tr-full  md:rounded-br-full max-md:rounded-full bg-slate-950 text-white md:translate-x-[-15px]':"hover:bg-slate-200 rounded-tr-full  rounded-br-full"}     transition-all p-3 block `}
        >
          products
        </Link>
        <ButtonLogOut />
      </div>
      <div className="md:pr-5 contains md:w-[80%]  h-full w-full ">{children}</div>
    </div>
  );
};

export default Dashboard;
