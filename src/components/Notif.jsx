import React, { useState } from 'react'

const Notif = () => {
    const [notif,setNotif]=useState('')
  return (
    <p className={`absolute ${notif.includes('success')? 'bg-green-600 p-4':'bg-red-400 '}`}>{notif}</p>
  )
}

export default Notif