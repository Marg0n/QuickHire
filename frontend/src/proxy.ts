import { getCurrentUser } from "@/services/AuthService";
import { NextRequest, NextResponse } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

//? role based Regex
const roleBasedPrivateRoutes = {
  customer: [/^\/dashboard\/customer/],
  admin: [/^\/dashboard\/admin/],
};

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const res = await getCurrentUser();
  const userInfo = res?.userData;

  //? user login or not
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
        // new URL(`/login?redirectPath=${pathname}`, request.nextUrl.origin)
      );
    }
  }

  //? if logged in then go to home
  if (userInfo && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //? role wise access control
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/dashboard/:path*",
    
  ],
};