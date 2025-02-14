"use client";

import { useState } from "react";

const NewBlog = () => {
  const [form, setForm] = useState({
    blogTitle: "",
    blogImage1: '',
    blogIntro: "",
    blogBody: "",
    blogImage2: [],
    blogConclusion: ""
  });
  const [src, setSrc] = useState(null);
  const urlHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    const fr = new FileReader();
    fr.onload = () => {
      setSrc(fr.result);
      console.log(src);
      form[name]=fr.result;
      console.log(form);
    };
    fr.readAsDataURL(file);
  };
  const formHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
    const res =await fetch("http://localhost:3000/api/blogsAPI", {
      method: "POST",
      body: JSON.stringify({
        blogTitle: form.blogTitle,
        blogImage1: form.blogImage1,
        blogIntro: form.blogIntro,
        blogBody: form.blogBody,
        blogImage2: form.blogImage2,
        blogConclusion: form.blogConclusion
      }),
      headers:{'Content-type':'application/json'}
    });
    console.log(res.status)
  };
  return (
    <>
      <div>new blog</div>
      <form 
      className="border-emerald-300 rounded-xl border flex gap-2 max-md:flex-col p-3 flex-wrap text-white md:p-4"
      onSubmit={formHandler}>
        <input
          className="border p-2 transition-all  border-emerald-200 rounded bg-white/0 "
          type="text"
          placeholder="write a title"
          onChange={formHandler}
          name="blogTitle"
        />
        <input
          className="p-2 border text-[12px] border-emerald-200 rounded-lg text-white"
          type="file"
          onChange={urlHandler}
          name="blogImage1"
        />
        <input
          className="border p-2 transition-all  border-emerald-200 rounded bg-white/0"
          type="text"
          placeholder="write a introduction"

          onChange={formHandler}
          name="blogIntro"
        />
        <input
          className="border p-2 transition-all  border-emerald-200 rounded bg-white/0"
          type="text"
          placeholder="write a body"

          onChange={formHandler}
          name="blogBody"
        />
        <input
          className="p-2 border text-[12px] border-emerald-200 rounded-lg text-white"
          
          type="file"
          onChange={urlHandler}
          name="blogImage2"
        />
        <input
          className="border p-2 transition-all  border-emerald-200 rounded bg-white/0"
          type="text"
          placeholder="write a conclusion"

          onChange={formHandler}
          name="blogConclusion"
        />
        <br />
        <button className="py-2 px-6 bg-teal-600 rounded-lg text-white mt-6 w-[170px] mx-auto" onClick={submitHandler}>
          submit blog
        </button>
      </form>
    </>
  );
};

export default NewBlog;
