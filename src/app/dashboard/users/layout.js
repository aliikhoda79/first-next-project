import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const layout =async ({children}) => {
     const session = await getServerSession(authOptions);
      const role = session.user.name[1];
      if (role !== "ADMIN") redirect("/dashboard");
    
  return (
    <div>{children}</div>
  )
}

export default layout