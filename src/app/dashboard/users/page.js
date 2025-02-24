import Link from "next/link";

import UsersPage from "../../../components/users/UsersPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
async function page() {
  //  const session = await getServerSession(authOptions);
  //   const role = session.user.name[1];
  //   if (role !== "ADMIN") redirect("/dashboard");
  
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return <UsersPage users={users} />;
}

export default page;
