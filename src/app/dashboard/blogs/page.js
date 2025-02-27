import DashboardBlogs from '../../../components/Blogs/DashboardBlogs'
const page =async () => {
    const res =await fetch('http://localhost:3000/api/blogsAPI',{cache:'no-store'})
  const blogs =await res.json()

  return (
    <DashboardBlogs blogs={blogs}/>    
  )
}

export default page