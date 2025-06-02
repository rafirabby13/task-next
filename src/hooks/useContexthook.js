"use client"
import { AuthContext } from '@/providers/AuthProviders'
import React, { useContext } from 'react'

const useContexthook = () => {
  return useContext(AuthContext)
}

export default useContexthook
