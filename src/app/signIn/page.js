"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    phoneNumber: "",
    pass: ""
  });
  const [message, setMessage] = useState("");

  const formChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: form.email,
      pass: form.pass,
      phoneNumber: form.phoneNumber,
      redirect: false
    });
    if (res.error) {
      console.log(res.error, "SOMETHING BAD HAPPENED");
      alert(res.error);
    } else {
      console.log(res);
      alert(`welcome`);
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <h1 className="pt-3 font-bold sm:pt-[100px] text-[28px] capitalize text-center">
        sign in
      </h1>
      <form
        onSubmit={formChangeHandler}
        className="flex text-[16px] flex-wrap justify-between gap-2 py-6 px-5 mx-auto mt-3 sm:mt-[50px] border-t sm:border border-emerald-300/75 sm:border-b-8 sm:border-r-8 text-emerald-300 min-h-[300px] sm:min-h-[400px]  rounded-3xl sm:w-[500px]"
      >
        <input
          name="phoneNumber"
          onChange={formChangeHandler}
          className="bg-transparent max-sm:h-12 border-white/0 outline-none focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-green-700 p-3 focus:border-b-2"
          type="text"
          placeholder="شماره تلفن"
        />

        <input
          name="email"
          onChange={formChangeHandler}
          className="bg-transparent w-full max-sm:h-12 border-white/0 outline-none focus:border-blue-400 border rounded-xl focus:shadow-lg focus:shadow-blue-800 p-3 focus:border-b-2"
          type="email"
          placeholder="yourEmail@.com"
        />
        <input
          name="pass"
          onChange={formChangeHandler}
          className="bg-transparent  border-white/0 outline-none w-full focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-emerald-500 p-3  focus:border-b-2"
          type="password"
          placeholder="رمز عبور"
        />
        {message && (
          <span
            className={
              message === "passwords match!!"
                ? "text-green-600"
                : "text-red-500"
            }
          >
            {message}
          </span>
        )}

        <button
          onClick={signInHandler}
          className="py-2 px-6 bg-teal-600 rounded-lg text-white mt-6 w-[170px] mx-auto"
        >
          submit
        </button>

        <Link
          className="py-2 px-6 flex justify-center bg-teal-600 rounded-lg text-white mt-6 w-[170px] mx-auto items-center"
          clas
          href={"/signup"}
        >
          sign up
        </Link>
      </form>
    </main>
  );
};

export default page;
