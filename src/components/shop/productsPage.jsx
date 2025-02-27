import Image from "next/image"
import { pic1 } from "../../utils/index";
import { pic2 } from "../../utils/index";
import { pic3 } from "../../utils/index";
import { pic4 } from "../../utils/index";
import Link from "next/link";

const ProductsPage = ({products}) => {

  return (
    <main className="mt-[100px] contains">
      <h1 className="w-full text-center font-extrabold text-4xl"> Shop</h1>

      <div className="grid grid-cols-2 md:grid-cols-3  mt-6 gap-8">
      {products.length==0?<div className="flex items-center text-[26px] justify-center w-full h-full "><h1>sorry :( there is no blog yet</h1></div> :products.map((p,i)=>(<Link href={`/shop/${p._id}`} className="shadow-lg shadow-slate-900/15 h-[350px] relative hover:scale-105 transition-all  ease-linear group md:h-[380px]  overflow-hidden hover:rounded-lg" key={i}>
      <div className="h-2/3  overflow-hidden ">
        <Image className="h-full object-contain  group-hover:blur-0 group-hover:scale-105 transition-all ease-linear blur-sm" src={pic4} alt="aa"></Image>
      </div>
      <div className=" bg-slate-900  flex flex-col gap-2 group-hover:bg-slate-800/50 p-4 transition-all ease-linear w-full">
      <h2 className="md:text-xl font-semibold">{p.productName}</h2>
      <span className='size-3 rounded' style={{backgroundColor:`${p.productColor}`}} > </span> 
      <p className="text-sm text-zinc-300 line-clamp-2 w-full">{p.description}</p>
      <p className="text-sm absolute border px-1 py-1 md:px-3 text-zinc-300 left-3 rounded-lg w-fit">$ {(p.price)} </p>
        </div>
      </Link>))}
      </div>
    </main>
  )
}

export default ProductsPage