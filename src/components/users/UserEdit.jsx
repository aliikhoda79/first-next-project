"use client";

import { useState } from "react";

const UserEdit = ({ user }) => {
  const [form, setForm] = useState({
    role: user.role,
    familyName: user.familyName,
    name: user.name,
    email: user.email,
    pass: user.pass,
    phoneNumber: user.phoneNumber
  });
  const [open, setOpen] = useState(false);
  const formChangeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const editUserHandler = async (e) => {
    e.preventDefault();
      console.log(form)
    const res = await fetch(`http://localhost:3000/api/users/${user._id}`, {
      method: "PATCH",
      body: JSON.stringify({
        userId: user._id,
        name: form.name,
        familyName: form.familyName,
        phoneNumber: form.phoneNumber,
        email: form.email,
        pass: form.pass
      }),
      headers: { "Content-type": "application/json" }
    });
    console.log(res);
  };

  return (
    <>
      <div
        className={`bg-white overflow-hidden transition-all relative rounded-lg w-full p-2 ${
          open ? "h-[550px]  md:h-[430px]" : "h-[65px]"
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className=" rounded-lg bg-slate-50 border p-1 "
        >
          edit user{" "}
        </button>
        <form
          onSubmit={formChangeHandler}
          className="w-full flex flex-wrap gap-3  mt-5"
        >
          <input type="file" />
          <input
            onChange={formChangeHandler}
            name="name"
            value={form.name}
            className="bg-transparent w-1/3  border-black/15 outline-none focus:border-red-400 border rounded-xl focus:shadow-md focus:shadow-red-500 px-3 py-2 focus:border-b-2"
            type="text"
            placeholder="نام"
          />
          <input
            onChange={formChangeHandler}
            name="familyName"
            value={form.familyName}
            className="bg-transparent  border-black/15 outline-none focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-yellow-500 px-3 py-2 focus:border-b-2"
            type="text"
            placeholder="نام خانوادگی"
          />
          <input
            onChange={formChangeHandler}
            name="phoneNumber"
            value={form.phoneNumber}
            className="bg-transparent border-black/15 outline-none focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-green-700 px-3 py-2 focus:border-b-2"
            type="text"
            placeholder="شماره تلفن"
          />

          <input
            onChange={formChangeHandler}
            name="email"
            value={form.email}
            className="bg-transparent w-full md:w-1/2   border-black/15 outline-none focus:border-blue-400 border rounded-xl focus:shadow-lg focus:shadow-blue-800 px-3 py-2 focus:border-b-2"
            type="email"
            placeholder="yourEmail@.com"
          />
          <input
            onChange={formChangeHandler}
            name="pass"
            className="bg-transparent w-full md:w-1/2 border-black/15 outline-none  focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-emerald-500 px-3 py-2  focus:border-b-2"
            type="password"
            placeholder="رمز عبور"
          />

          <button
            onClick={editUserHandler}
            type="submit"
            className="py-2 focus:bg-black px-6 bg-teal-600 rounded-lg text-white w-1/2 mt-2 mx-auto"
          >
            submit
          </button>
        </form>
      </div>
      <main className=" gap-y-5 text-left flex gap-4 flex-col md:flex-row   justify-end relative text-white rounded-lg py-3  ">
        {/* user info */}
        <div className="border h-[150px] w-[150px] border-red-400 p-2 shrink-0 rounded-xl">
          pic
        </div>

        <div className="flex gap-5 flex-wrap flex-row-reverse max-md:mb-[100px]">
          <div className="border border-red-400 p-2 rounded-xl">
            name: {user.name}
          </div>
          <div className="border border-red-400 p-2 rounded-xl">
            family name: {user.familyName}
          </div>
          <div className="border border-red-400 p-2 rounded-xl">
            phone number: {user.phoneNumber}
          </div>
          <div className="border border-red-400 p-2 rounded-xl">
            email: {user.email}
          </div>
          <div className="border border-red-400 p-2 rounded-xl">
            role: {user.role}
          </div>
          <div className="border border-red-400 p-2 rounded-xl">
            modificatin date: {user.createdAt}
          </div>
        </div>
      </main>
    </>
  );
};

export default UserEdit;
