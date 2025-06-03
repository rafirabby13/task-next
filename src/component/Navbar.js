"use client";
import useContexthook from "@/hooks/useContexthook";
import { AuthContext } from "@/providers/AuthProviders";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

function Navbar() {
  const { user , logoutUser, setUser, setIsAdmin , setLoading}= useContexthook();
  console.log(user);
  // console.log(name)
const router = useRouter()

  const handleLogout=()=>{ 
    logoutUser()
    .then(()=>{
      // localStorage.removeItem("access-token")
      console.log('logges out')
      setIsAdmin(false)
      setLoading(false)
      setUser(null)
      router.push('/')
    })
  }

  const items = (
    <>
      <Link href="/" className=" btn">
        Home
      </Link>
      <Link href="/dashboard" className=" btn">
        Dashboard
      </Link>
    </>
  );

  return (
    <div className="navbar bg-[#1f48df36] shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {items}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">dodozo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        {user? (
          <div className="flex items-center gap-4">
            {" "}
            <p>{user?.displayName}</p>
            <button onClick={handleLogout} className="btn">Logout</button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link href={"/login"} className="btn btn-primary">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;


