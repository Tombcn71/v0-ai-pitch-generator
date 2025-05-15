import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const isAuthenticated = !!token

    const isAuthPage = req.nextUrl.pathname.startsWith("/signin") || req.nextUrl.pathname.startsWith("/signup")
    const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard")

    // Redirect authenticated users away from auth pages
    if (isAuthenticated && isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // Redirect unauthenticated users away from protected routes
    if (!isProtectedRoute || isAuthenticated) {
      return NextResponse.next()
    }

    // Default redirect for unauthenticated users trying to access protected routes
    return NextResponse.redirect(new URL("/signin", req.url))
  } catch (error) {
    console.error("Middleware error:", error)
    // In case of error, allow the request to proceed to avoid blocking navigation
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/signup"],
}
