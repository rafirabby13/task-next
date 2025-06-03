"use client";
import useContexthook from "@/hooks/useContexthook";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Dashboard() {
  const { user, loading, isAdmin, setLoading } = useContexthook();
  console.log(isAdmin)
  console.log(user)

  const router = useRouter();
  // const token = localStorage.getItem("access-token");
  // const token = localStorage.getItem("access-token")
  // console.log(token);
  const token = user?.access_token
  useEffect(() => {
    if (!user) {
      router.push("/login");
      setLoading(false)
    }

    axios
      .get("https://backend.dodozo.co/api/v1/admin/venue/40", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.data);
      });
  }, []);
  return (
    <div>
      {loading ? "laoding....." : user && isAdmin ? "admin" : "Dashboard"}
    </div>
  );
}

export default Dashboard;
