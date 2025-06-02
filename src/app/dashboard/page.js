'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

function Dashboard() {

  const token = localStorage.getItem("access-token")
  console.log(token)
  useEffect(()=>{
    axios.get('https://backend.dodozo.co/api/v1/admin/venue/40',{
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(res=>{
      console.log(res.data)
    })
  },[])
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
