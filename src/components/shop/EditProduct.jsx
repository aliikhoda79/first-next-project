"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const EditProduct = ({ product, }) => {
  
  
  const [editorOpen, setEditorOpen] = useState(false);
 const {register,handleSubmit,setValue}= useForm({defaultValues:{
  productName: product.productName,
    category: product.category,
    description: product.description,
    productBrand: product.productBrand,
    productSize: product.productSize,
    price: product.price,
    productColor: product.productColor
 }})
 const urlHandler =(e)=>{
  const files=e.target.files
  console.log(files)
  const url=[]
  for (let i=0;i<files.length;i++){
    const fr= new FileReader()
    fr.onload=()=>{
      console.log(fr.result)
      url.push(fr.result)
      setValue('productImages',url)
    }
    fr.readAsDataURL(files[i])
  }
 }
 const onSubmit=async(data)=>{
  console.log(data)
 const res=await fetch(`/api/productsAPI/${product._id}`,{
  method:'PATCH',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
    productId:product._id,
    productName:data.productName,
        category:data.category,
        description:data.description,
        productColor:data.productColor,
        productBrand:data.productBrand,
        productSize:data.productSize,
        price:data.price,
        productImages:data.productImages,
  })
 })
}
  return (
    <div className="relative">
      <div
        className={`absolute bg-black/70  transition-all ease-linear w-full overflow-hidden ${editorOpen ? "h-[700px]" : "h-[85px]"}`}
      >
        <h2 className="text-white text-center">EditProduct</h2>
        <div className="p-2 ">
          <button
            onClick={() => setEditorOpen(!editorOpen)}
            className="py-1 rounded-lg text-white ml-2 mb-2 px-3 bg-blue-600 border"
          >
            edit
          </button>
          <button className="py-1 rounded-lg text-white px-3 bg-red-700 border">
            delete
          </button>
        </div>
        <form 
        onSubmit={handleSubmit(onSubmit)}
           className="mb-[70px] border-blue-400 rounded-xl border flex gap-2  max-md:flex-col p-3 
        flex-wrap  text-white md:p-4"
        >
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            {...register('productName',)}
            placeholder="product name "
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            {...register('category',)}
            
            placeholder="category"
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            {...register('productBrand',)}
            
            placeholder="productBrand"
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            
            {...register('description',)}
            placeholder="description"
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            
            {...register('productColor',)}
            placeholder="color"
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            
            {...register('price',)}
            placeholder="price"
            type="text"
          />
          <input className="w-[130px] md:w-full flex flex-wrap" onChange={urlHandler}  type="file" multiple />
          <div className="border px-2 flex items-center  rounded-lg bg-white/0">
            size :
            <label className="" htmlFor="small">
              small
            </label>
            <input
              className="accent-blue-400"
              id="small"
              value="small"
              {...register("productSize")}
              type="checkbox"
            />
            <label htmlFor="medium">medium</label>
            <input
              id="medium"
              {...register("productSize")}
              type="checkbox"
              value="medium"
            />
            <label htmlFor="lg">large</label>
            <input
              id="lg"
              value="large"
                {...register("productSize")}
              type="checkbox"
            />
          </div>
          <button className="border p-2 rounded-lg bg-teal-700">submit</button>
        </form>
      </div>
      <div className="overflow-y-auto pt-[95px] h-[500px] md:h-[700px] text-white ">
        <div className=" flex gap-3">
          pictures:
         
        {product.productImages.map((im,index)=>(<Image className="rounded-lg border" src={im} key={index} width={200} height={100} alt={product.productName} />))}

        </div>
        <p>{product.productName}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <div className=" border rounded-lg p-2">
          <p >size:</p>
          {product.productSize.map((s,i)=> <p key={i}>{s}</p>)}</div>
      </div>
    </div>
  );
};

export default EditProduct;
