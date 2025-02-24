import React from 'react'
import DashboardProducts from '../../../components/shop/DashboardProducts'
const page =async () => {
    const res =await fetch('http://localhost:3000/api/productsAPI')
  const products =await res.json()
  
  return (
    <DashboardProducts products={products}/>
  )
}

export default page