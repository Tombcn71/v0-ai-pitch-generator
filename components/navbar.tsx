"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { LogOut, Menu, Megaphone, Home, LayoutDashboard, Phone, LogIn } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { signOut, useSession } from "next-auth/react"

export function Navbar() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const isAuthenticated = status === "authenticated"

  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  const handleLogout = async () => {
    setIsLoggingOut(true)

    try {
      await signOut({ redirect: false })
      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <nav className="border-b bg-background sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Megaphone className="h-8 w-8 text-primary" />
          <span className="text-lg font-bold">AI Pitch Generator</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/">
              <Button variant="ghost" size="sm">
                Home
              </Button>
            </Link>

            {/* Only show Dashboard when authenticated */}
            {isAuthenticated && (
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
            )}

            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Contact Coach
              </Button>
            </Link>

            {isAuthenticated ? (
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950/20"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                <LogOut className="h-4 w-4 mr-1" />
                {isLoggingOut ? "Signing out..." : "Sign Out"}
              </Button>
            ) : (
              <Link href="/signin">
                <Button variant="ghost" size="sm">
                  <LogIn className="h-4 w-4 mr-1" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet
              open={isMenuOpen}
              onOpenChange={(open) => {
                setIsMenuOpen(open)
                if (open) {
                  document.body.style.overflow = "hidden"
                } else {
                  document.body.style.overflow = ""
                }
              }}
            >
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Megaphone className="h-6 w-6 text-primary" />
                    <span>Menu</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => {
                      router.push("/")
                      setIsMenuOpen(false)
                    }}
                  >
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </Button>

                  {/* Only show Dashboard when authenticated */}
                  {isAuthenticated && (
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        router.push("/dashboard")
                        setIsMenuOpen(false)
                      }}
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={() => {
                      router.push("/contact")
                      setIsMenuOpen(false)
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Coach
                  </Button>

                  {isAuthenticated ? (
                    <Button
                      variant="ghost"
                      className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950/20"
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      {isLoggingOut ? "Signing out..." : "Sign Out"}
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={() => {
                        router.push("/signin")
                        setIsMenuOpen(false)
                      }}
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
