import DashboardBlogs from '../../../components/Blogs/DashboardBlogs'
const page =async () => {
    const res =await fetch('http://localhost:3000/api/blogsAPI')
  const blogs =await res.json()
  console.log(blogs)
  return (
    <DashboardBlogs blogs={blogs}/>    
  )
}

export default page