import Image from "next/image"
import Link from "next/link"
import { pic4 } from "../../utils/index";

const DashboardBlogs = ({blogs}) => {
  console.log('blogs component',blogs)  
  return (
    <div className="flex flex-col ">
      <Link className="bg-cyan-600  w-fit  text-white rounded-md p-2 mt-2" href={'/dashboard/blogs/newBlog'}>new blog</Link>
      <div className=" overflow-y-auto h-[700px] grid grid-cols-2 md:grid-cols-3  pt-6  gap-6">

      {blogs.length==0?<div className="flex items-center text-[26px] text-white justify-center w-full h-full "><h1>sorry :( there is no blog yet</h1></div> :blogs.map((b,i)=>(<Link href={`/dashboard/blogs/${b._id}`} className="shadow-lg shadow-slate-900/15 h-[200px] hover:scale-105 transition-all ease-linear group md:min-h-[380px] md:max-w-[90%] relative overflow-hidden hover:rounded-lg" key={i}>
      <div className="h-2/3 overflow-hidden ">
        <Image className=" object-cover group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm" src={pic4} alt="aa"></Image>
      </div>
      <div className="bg-slate-900 flex flex-col gap-2 group-hover:bg-slate-800/50 p-4 text-white transition-all ease-linear h-full w-full">
      <h2 className="text-xl font-semibold">{b.blogTitle}</h2> 
      <p className="text-sm text-zinc-300 line-clamp-2 w-full">{b.blogIntro}jkl;asdssafsdfjfijei
        sdfjkljkljlk;alsdjfkljsdaklfjlkasdddf
        ksjdklfjksdjklasdjksajldjskld
        kjdlsajdakljklajsdlj</p>
        </div>
      </Link>))}
      </div>
      
    </div>
  )
}

export default DashboardBlogs