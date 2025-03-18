"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sage/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-brunswick-green">CodeCrafters</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-fern-green">
            Inicio
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-fern-green">
            Nosotros
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-fern-green">
            Servicios
          </Link>
          <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-fern-green">
            Portafolio
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-fern-green">
            Blog
          </Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-fern-green">
            Equipo
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-fern-green">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-fern-green" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-fern-green"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-fern-green"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium transition-colors hover:text-fern-green"
              onClick={toggleMenu}
            >
              Portafolio
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-fern-green"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium transition-colors hover:text-fern-green"
              onClick={toggleMenu}
            >
              Equipo
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-fern-green"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

