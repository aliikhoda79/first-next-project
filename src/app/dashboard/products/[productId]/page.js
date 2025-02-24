import EditProduct from "../../../../components/shop/EditProduct"

const page =async ({params :{productId}}) => {
    console.log(productId)
    const res=await fetch(`http://localhost:3000/api/productsAPI/${productId}`)
    const {product}=await res.json()
  return (
    <EditProduct product={product} />
  )
}

export default page