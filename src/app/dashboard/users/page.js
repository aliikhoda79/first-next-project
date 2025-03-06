import Link from "next/link";

import UsersPage from "../../../components/users/UsersPage";

async function page() {
  
  
  const res = await fetch("http://localhost:3000/api/users",{cache:'no-store'});
  const users = await res.json();

  return <UsersPage users={users} />;
}

export default page;
