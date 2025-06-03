// 'use client'
import { NextResponse } from 'next/server'
import useContexthook from './hooks/useContexthook'

export function middleware(request) {
    // const {user} = useContexthook()
    // console.log(user)
    console.log(request)
    // const token = localStorage.getItem("access-token")
    // console.log(token)
    // if (!token) {
    //     return NextResponse.redirect(new URL('/login', request.url))
        
    // }
    // return NextResponse.redirect(new URL('/dashboard', request.url))
  }



  export const config = {
    matcher: '/dashboard',
  }