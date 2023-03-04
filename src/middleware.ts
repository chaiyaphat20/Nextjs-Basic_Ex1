import { NextRequest, NextResponse } from "next/server";
import  { useState } from "react";

export default function middleware(req: NextRequest) {
  const url = req.url;
  const isLogin = true;
  const server = "http://localhost:3000";
  if (url.includes("/stock")) {
    if (isLogin) {
      return NextResponse.next(); //ถ้า login ผ่านก็ให้เข้าหน้านั้นได้
    } else {
      return NextResponse.redirect(`${server}`); //ถ้า login ไม่ผ่าน ให้ไปหน้า login
    }
  }
  return NextResponse.next();
}
