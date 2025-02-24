import Image from "next/image";
import Link from "next/link";
import { pic4 } from "../utils/index";

const LatestBlogs =async () => {


    const res=await fetch("http://localhost:3000/api/blogsAPI")
    const data =await res.json()
    console.log(data)
    const newBlogs= data.slice(0,3)

  return (
    <div className="mt-[80px] ">
      <h2 className="w-full mb-4 text-2xl font-semibold text-center">Latest blogs</h2>
      <div className="bg-slate-500 overflow-x-auto whitespace-nowrap rounded-xl md:flex gap-[60px] justify-center p-3 h-[360px] ">
        
        {newBlogs.map((b, i) => (
          <div
            className="h-[320px] relative overflow-hidden group hover:skew-x-3 hover:scale-105 transition-all inline-block w-[250px] rounded-lg max-md:ml-[200px]"
            key={i}
          >
            <Link href={`/blogs/${b._id}`} className=" ">
              <div className="w-[250px] h-2/3">
                <Image
                  className="h-full object-cover   group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm"
                  src={pic4}
                  alt="aa"
                ></Image>
              </div>
              <div className="bg-slate-900 flex flex-col gap-2 group-hover:bg-slate-800/50 px-2 py-1 transition-all ease-linear h-full w-full">
                <h2 className="text-xl font-semibold">{b.blogTitle}</h2>
                <p className="text-sm text-zinc-300 line-clamp-2 w-full">
                  {b.blogIntro}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  nihil aperiam obcaecati cum! Aperiam eos deleniti mollitia
                  dolore, debitis suscipit distinctio non deserunt natus esse
                  minus repellendus iste a modi rerum voluptates laudantium
                  ducimus consectetur ipsam asperiores. Quisquam reprehenderit
                  sint quasi nisi doloremque quos corporis fuga, minima tempore
                  voluptatum quas a perspiciatis consequuntur hic veritatis
                  dolore illo explicabo ipsam nihil repudiandae incidunt! Libero
                  numquam unde doloribus perspiciatis laboriosam quibusdam
                  veniam, aperiam expedita necessitatibus eligendi repudiandae
                  atque officiis. Molestiae eius illum quis veritatis doloremque
                  provident, unde adipisci culpa recusandae eum ipsam explicabo
                  vitae optio odit nihil possimus voluptas magnam! Eos, libero.
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;

