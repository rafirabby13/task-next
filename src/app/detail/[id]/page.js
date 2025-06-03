"use client";
import { useParams } from "next/navigation";
import React from "react";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  // useEffect(() => {
  //     if (loading) {
  //       return
  //     }
  //     if (!token) {
  //       router.push("/login");
  //       setLoading(false)
  //     }

  //     axios
  //       .get("https://backend.dodozo.co/api/v1/admin/venue", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((res) => {
  //         console.log(res?.data?.data);
  //         setAdminData(res?.data?.data)
  //       });
  //   }, [user, loading]);
  return <div className="text-center">Card Detail here</div>;
};

export default Detail;
