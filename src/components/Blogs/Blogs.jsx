import Image from "next/image"
import { pic1 } from "../../utils/index";
import { pic2 } from "../../utils/index";
import { pic3 } from "../../utils/index";
  import { pic4 } from "../../utils/index";
import Link from "next/link";

const Blogs = ({blogs}) => {

  return (
    <main className="mt-[100px] contains">
      <h1 className="w-full text-center font-extrabold text-4xl"> Blogs</h1>
      <div className="grid grid-cols-2 md:grid-cols-3  mt-6 gap-8">
      {blogs.map((b,i)=>(<Link href={`/blogs/${b._id}`} className="shadow-lg shadow-slate-900/15 h-[200px] hover:scale-105 transition-all ease-linear group md:min-h-[380px] relative overflow-hidden hover:rounded-lg" key={i}>
      <div className="h-2/3 overflow-hidden ">
        <Image className=" object-cover group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm" src={pic4} alt="aa"></Image>
      </div>
      <div className="bg-slate-900 flex flex-col gap-2 group-hover:bg-slate-800/50 p-4 transition-all ease-linear h-full w-full">
      <h2 className="text-xl font-semibold">{b.blogTitle}</h2> 
      <p className="text-sm text-zinc-300 line-clamp-2 w-full">{b.blogIntro}jkl;asdssafsdfjfijei
        sdfjkljkljlk;alsdjfkljsdaklfjlkasdddf
        ksjdklfjksdjklasdjksajldjskld
        kjdlsajdakljklajsdlj</p>
        </div>
      </Link>))}
      </div>
    </main>
  )
}

export default Blogs