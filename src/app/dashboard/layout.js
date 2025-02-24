import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Dashboard from "../../components/dashboardComponents/Dashboard"
export const metaData={
    title:'dashboard',
    description:'generated in NextJs environment'
}
const mainColor='bg-slate-950'
const textColor='#fff'



export default async function dashboardLayout({children}){
    const session = await getServerSession(authOptions)
    if (!session) redirect('/signIn')
   
     return (
            <main style={{color:`${textColor}`}} className={`max-w-[1600px] mx-auto pt-[80px] ${mainColor} min-h-[100vh]`}>
                <Dashboard session={session}>
                    {children}
                    {/* این چیلدرن شامل هر فایل page.js ای است که فراخوانده میشه */}

                </Dashboard>
            </main>
     
     )
}
