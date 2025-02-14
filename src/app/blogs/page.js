import Blogs from '../../components/Blogs/Blogs'
const page =async () => {
  const res =await fetch('http://localhost:3000/api/blogsAPI')
  const blogs =await res.json()
  console.log(blogs)
  return (
    <Blogs blogs={blogs} />
  )
}

export default page