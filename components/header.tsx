"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-200 ${isScrolled ? "bg-navy-dark/90 backdrop-blur-md border-b border-navy-medium/30" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-medium text-white">
              Ben Laycock
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm text-navy-lightest hover:text-navy-light transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm text-navy-lightest hover:text-navy-light transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm text-navy-lightest hover:text-navy-light transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm text-navy-lightest hover:text-navy-light transition-colors">
              Projects
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-navy-medium/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-b border-navy-medium/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 text-base font-medium text-navy-lightest hover:bg-navy-medium/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="block px-3 py-2 text-base font-medium text-navy-lightest hover:bg-navy-medium/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 text-base font-medium text-navy-lightest hover:bg-navy-medium/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-base font-medium text-navy-lightest hover:bg-navy-medium/20 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

