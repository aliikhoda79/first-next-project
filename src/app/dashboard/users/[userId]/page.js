import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import UserEdit from "../../../../components/users/UserEdit";

const page = async ({ params: { userId } }) => {
  // const session = await getServerSession(authOptions);
  // const role = session.user.name[1];
  // if (role !== "ADMIN") redirect("/dashboard");

  const res = await fetch(`http://localhost:3000/api/users/${userId}`);
  const { user } = await res.json();

  return <UserEdit user={user} />;
};

export default page;
