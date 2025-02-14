import BlogPage from '../../../components/Blogs/BlogPage'
const page =async ({ params: { blogId } }) => {
    
    const res =await  fetch(`http://localhost:3000/api/blogsAPI/${blogId}`)
    const {blog}=await res.json()
    
  return (
    <BlogPage blog={blog} />
  )
}

export default page