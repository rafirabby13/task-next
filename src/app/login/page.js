"use client";
import useContexthook from "@/hooks/useContexthook";
import React from "react";
import { FaBeer, FaGoogle } from "react-icons/fa";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const { loginwithGoogle, setUser, setIsAdmin, loading } = useContexthook();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.post(
      "https://backend.dodozo.co/api/v1/auth/login",
      data
    );
    const userData = response?.data?.data;
    setUser(userData);

    if (userData?.access_token) {
      // localStorage.setItem("access-token", res.data.data.access_token)
      router.push("/dashboard");
      setIsAdmin(true);
    }
  
  };
  const handleGoogleLogin = () => {
    loginwithGoogle()
      .then((res) => {
        console.log(res?.user);
        if (res?.user) {
            console.log('uyesjsk')
          setUser(res?.user);
          router.push("/dashboard");
        }
        // navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // toast.error(err.message);
      });
  };
  return (
    <div className="flex flex-col items-center space-y-3">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-2xl shadow-2xl">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Phone</legend>
          <input
            {...register("login")}
            type="text"
            className="input"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Password</legend>
          <input
            {...register("password")}
            type="password"
            className="input"
            placeholder="Type here"
          />
        </fieldset>

        <input className="btn" type="submit" />
      </form>

      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#254336] hover:bg-[#1e362a] text-white font-semibold transition-all duration-300 w-fit"
      >
        <FaGoogle className="text-lg" /> Sign In With Google
      </button>
    </div>
  );
}

export default Login;
