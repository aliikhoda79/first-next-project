import ProductsPage from '../../components/shop/productsPage'
const page =async () => {
  const res =await fetch('http://localhost:3000/api/productsAPI')
  const products =await res.json()
  console.log(products)
  return (
    <ProductsPage products={products} />
  )
}

export default page