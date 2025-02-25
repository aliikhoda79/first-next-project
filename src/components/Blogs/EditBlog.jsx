"use client";
import Image from "next/image";
import React, { useState } from "react";

const EditBlog = ({ blog }) => {
  const [fileUrl,setFileUrls]=useState([])
  const [editorOpen, setEditorOpen] = useState(false);
  const [form, setForm] = useState({
    blogTitle: blog.blogTitle,
    blogImages: blog.images,
    blogIntro: blog.blogIntro,
    blogBody: blog.blogBody,
    blogConclusion: blog.blogConclusion
  });
  const urlHandler =(e)=>{
    const files=e.target.files
    console.log(files)
    const url=[]
    for (let i=0;i<files.length;i++){
      const fr= new FileReader()
      fr.onload=()=>{
        console.log(fr.result)
        url.push(fr.result)
        setFileUrls(url)
      }
      fr.readAsDataURL(files[i])
    }
   }
  const submitHandler=(e)=>{
    form.blogImages=fileUrl
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    console.log(form);
    
  }
  return (
    <div className="relative">
      <div
        className={`absolute bg-black/70  transition-all ease-linear w-full overflow-hidden ${
          editorOpen ? "h-[700px]" : "h-[85px]"
        }`}
      >
        <h2 className="text-white text-center">Edit blog</h2>
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
        onSubmit={submitHandler}
          className="mb-[70px] border-blue-400 rounded-xl border flex gap-2  max-md:flex-col p-3 
            flex-wrap  text-white md:p-4"
        >
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            name="blogTitle"
            onChange={submitHandler}
            value={form.blogTitle}
            placeholder="title "
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            value={form.blogIntro}
            name="blogIntro"
            onChange={submitHandler}
            placeholder="introduction"
            type="text"
          />
          <input
            className="border p-2   border-blue-400 rounded bg-white/0 "
            value={form.blogBody}
            onChange={submitHandler}
            name="blogBody"
            placeholder="body"
            type="text"
          />
          <input
            className="border p-2   border-blue-400 
                rounded bg-white/0 "
            value={form.blogConclusion}
            onChange={submitHandler}
            name="blogConclusion"
            placeholder="conclusion"
            type="text"
          />

          <input
            className="w-[130px] md:w-full flex flex-wrap"
            name="blogImages"
            
              onChange={urlHandler}
            type="file"
            multiple
          />
          <button className="border p-2 rounded-lg bg-teal-700">submit</button>
        </form>
      </div>
      <div className="overflow-y-auto pt-[95px] h-[500px] md:h-[700px] text-white ">
        <div className=" flex gap-3">
          pictures:
          {blog.blogImages.map((im, index) => (
            <Image
              className="rounded-lg border"
              src={im}
              key={index}
              width={200}
              height={100}
              alt={blog.blogTitle}
            />
          ))}
        </div>
        <p>{form.blogTitle}</p>
        <p>{form.blogIntro}</p>
        <p>{form.blogBody}</p>
        <p>{form.blogConclusion}</p>
      </div>
    </div>
  );
};

export default EditBlog;
