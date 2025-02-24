"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const NewProduct = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit =async (data) => {
    
    console.log(data)
    const res=await fetch('/api/productsAPI',{
      method:'POST',
      body:JSON.stringify({
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
    console.log(res)
    console.log('form',{
      productName:data.productName,
      category:data.category,
      description:data.description,
      productColor:data.productColor,
      productBrand:data.productBrand,
      productSize:data.productSize,
      price:data.price,
      productImages:data.fileURLs,
    })

  };
  const urlHandler = (e) => {
    const urls = [];
    const file = e.target.files;
    console.log(file.length);
    for (let i = 0; i < file.length; i++) {
      console.log(file[i]);
      const fr = new FileReader();
      fr.onload = () => {
        urls.push(fr.result);
        setValue("productImages", urls);
      };
    
      fr.readAsDataURL(file[i]);
    }
  };
  return (
    <>
      <div>new product</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-[70px] border-emerald-300 rounded-xl border flex gap-2 bg-gray-700 max-md:flex-col p-3 
        flex-wrap  text-white md:p-4"
      >
        <input
          className="border p-2   border-emerald-200 rounded bg-white/0 "
          type="text"
          placeholder="write a title"
          {...register("productName")}
        />
        <input
          className="border p-2   border-emerald-200 rounded bg-white/0"
          type="text"
          placeholder="category"
          {...register("category")}
        />
        <input
          className="border p-2 transition-all  border-emerald-200 rounded bg-white/0"
          type="text"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="border p-2 transition-all  border-emerald-200 rounded bg-white/0"
          type="text"
          placeholder="color"
          {...register("productColor")}
        />
        <input
          className="border p-2 shrink-0 border-emerald-200 rounded bg-white/0"
          placeholder="type the brand"
          type="text"
          {...register("productBrand")}
        />
        <input
          className="border p-2 shrink-0  border-emerald-200 rounded bg-white/0"
          placeholder="price"
          type="text"
          {...register("price")}
        />

        <div className="border flex  items-center gap-1 p-1 rounded-lg bg-white/0">
          :size
          <br />
          <br />
          <label className="" htmlFor="small">
            small
          </label>
          <input
            className="accent-emerald-300"
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
          <input id="lg" value="large" {...register("productSize")} type="checkbox" />
        </div>

        <input
          className="p-2 border text-[12px] border-emerald-200 w-[120px] rounded-lg text-white"
          type="file"
          multiple
          onChange={urlHandler}
        />
        <br />
        <button className="py-2 px-6 bg-teal-600 rounded-lg text-white mt-6 w-[170px] mx-auto">
          submit blog
        </button>
      </form>
      <div className="size-2"></div>
    </>
  );
};

export default NewProduct;
