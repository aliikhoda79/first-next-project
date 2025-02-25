import EditBlog from '../../../../components/Blogs/EditBlog'
const page =async ({params:{blogId}}) => {
  console.log(blogId)
  const res=await fetch(`http://localhost:3000/api/blogsAPI/${blogId}`)
  const {blog} = await res.json()
  
  return (
    <EditBlog blog={blog}/>
  )
}

export default page