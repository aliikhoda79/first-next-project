"use client";
import { useState } from "react";

const NewUser = () => {
  const [form, setForm] = useState({
    name: "",
    familyName: "",
    phoneNumber: "",
    email: "",
    pass: "",
    confirmPass: ""
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const formChangeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    // pass validation
    if (!form.pass) return setMessage("password is required");
    if (form.pass !== form.confirmPass) setMessage("passwords are not match");
    else setMessage("passwords match!!");
    //post new user to backend
    const response = await fetch("/api/auth/signUp", {
      method: "POST",
      body: JSON.stringify({
        name: form.name,
        familyName: form.familyName,
        phoneNumber: form.phoneNumber,
        email: form.email,
        pass: form.pass
      }),
      headers: { "Content-type": "application/json" }
    });
    console.log("response", response);
    const data = await response.json();
    console.log("data fetched successfully", data);
    if (response.status === 201) {
      setSuccess(data.user);
      setTimeout(() => setSuccess(null), 5000);
    }
  };

  return (
    <>
      <div className=" text-white p-2">NewUser</div>

      <form
        onSubmit={formChangeHandler}
        className="flex text-[16px] flex-wrap justify-between gap-2 py-6 px-5 mx-auto mt-3 sm:mt-[50px] border-t sm:border border-emerald-300/75 sm:border-b-4 text-emerald-300 min-h-[300px] sm:min-h-[400px]  rounded-3xl sm:w-[500px]"
      >
        <input
          onChange={formChangeHandler}
          name="name"
          className="bg-transparent w-1/3 max-sm:h-12 border-white/0 outline-none focus:border-red-400 border rounded-xl focus:shadow-md focus:shadow-red-500 px-3 focus:border-b-2"
          type="text"
          placeholder="نام"
        />
        <input
          onChange={formChangeHandler}
          name="familyName"
          className="bg-transparent max-sm:h-12 border-white/0 outline-none focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-yellow-500 p-3 focus:border-b-2"
          type="text"
          placeholder="نام خانوادگی"
        />
        <input
          onChange={formChangeHandler}
          name="phoneNumber"
          className="bg-transparent max-sm:h-12 border-white/0 outline-none focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-green-700 p-3 focus:border-b-2"
          type="text"
          placeholder="شماره تلفن"
        />

        <input
          onChange={formChangeHandler}
          name="email"
          className="bg-transparent w-full max-sm:h-12 border-white/0 outline-none focus:border-blue-400 border rounded-xl focus:shadow-lg focus:shadow-blue-800 p-3 focus:border-b-2"
          type="email"
          placeholder="yourEmail@.com"
        />
        <input
          onChange={formChangeHandler}
          name="pass"
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
        <input
          onChange={formChangeHandler}
          name="confirmPass"
          className="bg-transparent  border-white/0 outline-none w-full focus:border-blue-400 border rounded-xl focus:shadow-md focus:shadow-emerald-500 p-3 focus:border-b-2"
          type="password"
          placeholder="تکرار رمز عبور"
        />
        <button
          onClick={signUpHandler}
          type="submit"
          className="py-2 px-6 bg-teal-600 rounded-lg text-white mt-6 w-[170px] mx-auto"
        >
          submit
        </button>
      </form>
      {success && (
        <div className="transition bg-white border-green-500 text-green-700 absolute flex justify-center items-center ">
          <p>
            <strong>User added:</strong>
          </p>
          <p>{success.name}</p>
          <p>{success.familyName}</p>
        </div>
      )}
    </>
  );
};

export default NewUser;
