"use client";
import useContexthook from "@/hooks/useContexthook";
import React from "react";
import { FaBeer, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const { loginwithGoogle, setUser } = useContexthook();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {

    console.log(data)
  axios.post('https://backend.dodozo.co/api/v1/auth/login', data)
  .then(res=>{
    console.log(res.data.data.access_token)
    localStorage.setItem("access-token", res.data.data.access_token)
  })

    // console.log(userData);
  }
  const handleGoogleLogin = () => {
    // loginwithGoogle()
    //   .then((res) => {
    //     // console.log(res.user);
    //     // toast.success("Login Successfully");
    //     setUser(res.user);
    //     // navigate(location?.state ? location.state : "/");
    //   })
    //   .catch((err) => {
    //     // toast.error(err.message);
    //   });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Phone</legend>
          <input  {...register("login")}  type="text" className="input" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Password</legend>
          <input  {...register("password")}  type="password" className="input" placeholder="Type here" />
        </fieldset>

        <input className="btn" type="submit" />
      </form>

      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-[#254336] hover:bg-[#1e362a] text-white font-semibold transition-all duration-300"
      >
        <FaGoogle className="text-lg" /> Sign In With Google
      </button>
    </div>
  );
}

export default Login;
