"use client";
import AdminDashboard from "@/component/AdminDashboard";
import useContexthook from "@/hooks/useContexthook";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "../login/page";

function Dashboard() {
  const [adminData, setAdminData] = useState("");
  const { user, loading, isAdmin, setLoading } = useContexthook();
  console.log(isAdmin);
  console.log(user);

  const router = useRouter();
  // const token = localStorage.getItem("access-token");
  // const token = localStorage.getItem("access-token")
  // console.log(token);
  const token = user?.access_token;
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!token) {
      router.push("/login");
      setLoading(false);
    }

    axios
      .get("https://backend.dodozo.co/api/v1/admin/venue/40", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res?.data?.data);
        setAdminData(res?.data?.data);
      });
  }, [user, loading]);
  return (
    <div>
      {loading ? (
        <span className="loading loading-bars loading-xl text-center"></span>
      ) : user && isAdmin? 
         (
          <AdminDashboard adminData={adminData} />
        ) : (
          "Normnmal User"
        )
    }
    </div>
  );
}

export default Dashboard;
