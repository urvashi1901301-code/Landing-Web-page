"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-serif font-bold text-primary">✦ LUXORT</div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition">
              HOME
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition">
              ABOUT
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition">
              EVENTS
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm hover:text-primary transition flex items-center gap-2">🌐 EN</button>
            <span className="text-sm">+123 7564 8970</span>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              LOGIN →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 py-4">
              <Link href="#" className="text-sm font-medium">
                HOME
              </Link>
              <Link href="#" className="text-sm font-medium">
                ABOUT
              </Link>
              <Link href="#" className="text-sm font-medium">
                EVENTS
              </Link>
              <Button className="w-full mt-4">LOGIN →</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
