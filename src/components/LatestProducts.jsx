'use client'
import { pic3 } from "../utils/index";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestProducts = () => {
    const [newProducts, setNewBlogs] = useState([]);
    
        useEffect(() => {
          fetch("/api/productsAPI")
            .then((res) => res.json())
            .then((products) => {
              setNewBlogs(products.slice(0, 4));
            })
            .catch((err) => console.log("problem fetching products",err));
        }, []);
        
        useEffect(() => {
          console.log(newProducts);
        }, [newProducts]);
    
  return (
    <div className="mt-[80px] ">
    <h2 className="w-full mb-4 text-xl font-semibold text-center">Latest products</h2>
    <div className="bg-slate-500 overflow-x-auto whitespace-nowrap rounded-xl md:flex gap-[60px] justify-center p-3 h-[360px] ">
    {newProducts.map((p, i) => (
        <div className="h-[320px] relative overflow-hidden group hover:skew-x-3 hover:scale-105 transition-all inline-block w-[250px] rounded-lg max-md:ml-[200px]" key={i}>
      <Link  href={`/shop/${p._id}`} className=" " >
      <div className="w-[250px] h-2/3">
        <Image className="h-full object-cover   group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm" src={pic3} alt="aa"></Image>
      </div>
      <div className=" bg-slate-950  flex flex-col group-hover:bg-slate-800/90 p-4 transition-all ease-linear w-full">
      <h2 className="md:text-xl font-semibold">{p.productName}</h2>
      <span className='size-3 rounded' style={{backgroundColor:`${p.productColor}`}} > </span> 
      <p className="text-sm text-zinc-300 line-clamp-2 w-full">{p.description}</p>
      <p className="text-sm absolute border px-1 py-1 md:px-3 text-zinc-300 left-2 rounded-lg w-fit">$ {(p.price)} </p>
        </div>
      
      </Link>

        </div>
    ))}
  </div>
  </div>
  )
}

export default LatestProducts


{/* <div className="flex flex-nowrap h-[350px] mt-6 gap-[60px] px-2 py-4 rounded-xl bg-slate-500 overflow-x-auto md:justify-center">
    {newProducts.map((p, i) => (
      <Link href={`/shop/${p._id}`} className="shadow-lg shadow-slate-900/15 h-[200px] w-[350px] relative  transition-all ease-linear group md:h-[300px]  overflow-hidden hover:rounded-lg" key={i}>
      <div className="w-[250px] h-2/3">
        <Image className="h-full object-cover   group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm" src={pic3} alt="aa"></Image>
      </div>
      <div className=" bg-slate-900  flex flex-col gap-2 group-hover:bg-slate-800/50 p-4 transition-all ease-linear w-full">
      <h2 className="md:text-xl font-semibold">{p.productName}</h2>
      <span className='size-3 rounded' style={{backgroundColor:`${p.productColor}`}} > </span> 
      <p className="text-sm text-zinc-300 line-clamp-2 w-full">{p.description}</p>
      <p className="text-sm absolute border px-1 py-1 md:px-3 text-zinc-300 left-2 rounded-lg w-fit">$ {(p.price)} </p>
        </div>
      </Link>
    ))}
  </div> */}