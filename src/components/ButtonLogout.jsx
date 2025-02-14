'use client'
import { signOut } from "next-auth/react"

const ButtonLogout = () => {
const logOutHandler=()=>{
    signOut({redirect:false}).then(()=>{
        window.location='/signIn'
    })
}

    return (
        <button onClick={logOutHandler} className="border-2 px-2 rounded-xl md:px-4 md:py-2 hover:bg-yellow-300 transition  fixed bottom-20 right-2 bg-slate-400 " > <span className="">log out</span></button>
    )
}

export default ButtonLogout