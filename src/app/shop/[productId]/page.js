import ProductPage from '../../../components/shop/productPage'
const page =async ({ params: { productId } }) => {
    
    const res =await fetch(`http://localhost:3000/api/productsAPI/${productId}`)
    const {product}=await res.json()
   
  return (
    <ProductPage product={product} />
  )
}

export default page