import React from "react";
import NewUser from "../../../../components/users/NewUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
const page =async () => {
  //  const session = await getServerSession(authOptions);
  //   const role = session.user.name[1];
  //   if (role !== "ADMIN") redirect("/dashboard");
  
  return <NewUser />;
};

export default page;
