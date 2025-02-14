"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const UsersPage = ({ users }) => {
  const [searchValue, setSearchVal] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [error, setError] = useState("");
  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };
  useEffect(() => {
    if (searchValue) {
      const search = async () => {
        const res = await fetch("/api/search/users", {
          method: "POST",
          body: JSON.stringify({ searchValue })
        });
        const searchData = await res.json();

        if (res.status === 404) setError(searchData.message);
        if (res.status === 200) {
          setSearchResult(searchData.searchedUsers);
          setError("");
        }
      };
      search();
    }
  }, [searchValue]);
  return (
    <div>
      <h1 className="p-2 pr-4 text-[26px] font-semibold ">users</h1>
      <div className="flex gap-4 ">
        <Link
          className="bg-blue-500 rounded-xl flex items-center p-2 text-nowrap "
          href="/dashboard/users/newUser"
        >
          new user
        </Link>
        <input
          onChange={searchHandler}
          type="text"
          placeholder="search for users"
          className="w-full text-gray-700 p-2 border rounded-2xl"
        />
      </div>
      {error ? <div className="text-white">{error}</div> : null}
      <div className="gap-2 max-md:mb-[100px] p-2 mt-3 flex flex-col overflow-y-auto h-[500px]">
        {searchResult
          ? searchResult.map((u, i) => (
              <Link
                href={`/dashboard/users/${u._id}`}
                key={i}
                className="w-full bg-slate-600 border  rounded-lg p-2 flex justify-between"
              >
                <div className="block">{u.name}</div>
                <div>{Date.parse(u.createdAt)}</div>
              </Link>
            ))
          : users.map((u, i) => (
              <Link
                href={`/dashboard/users/${u._id}`}
                key={i}
                className="w-full bg-slate-600 border  rounded-lg p-2 flex justify-between"
              >
                <div className="block">{u.name}</div>
                <div>{Date.parse(u.createdAt)}</div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default UsersPage;
