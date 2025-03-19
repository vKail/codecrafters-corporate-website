"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { routes } from "@/data/routes"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sage/40 backdrop-blur supports-[backdrop-filter]:bg-timberwolf/50 bg-timberwolf/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brunswick-green">CodeCrafters</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          {
            routes.map((route, index) => (
              <Link key={index} href
              ={route.href} className={`font-medium transition-colors hover:text-fern-green ${pathname === route.href ? 'text-fern-gree font-semibold text-xl' : 'text-muted-foreground'}`}>
                {route.label}
              </Link>
            ))
          }

        </nav>

        <div className="flex items-center space-x-4">
          {/* <ModeToggle /> */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-6">
            {
              routes.map((route, index) => (
                <Link key={index} href={route.href} className={`text-sm font-medium transition-colors hover:text-fern-green 
                  ${ 
                    pathname === route.href ? 'text-fern-gree font-semibold text-xl' : 'text-muted-foreground'
                  }`} onClick={toggleMenu}>
                  {route.label}
                </Link>
              ))
            }
            
          </nav>
        </div>
      )}
    </header>
  )
}

