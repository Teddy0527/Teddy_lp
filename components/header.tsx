"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, RabbitIcon as TeddyBear } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#c68f56]/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <TeddyBear className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#c68f56]">
              Teddy
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary">
            サービス
          </Link>
          <Link href="/#case-studies" className="text-sm font-medium transition-colors hover:text-primary">
            事例
          </Link>
          <Link href="/#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            料金
          </Link>
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            お問い合わせ
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button asChild className="bg-primary hover:bg-[#5e3b22]">
            <Link href="/#contact">無料相談を予約する</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-80" : "hidden",
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4">
          <Link href="/#services" className="flex items-center py-2" onClick={toggleMenu}>
            サービス
          </Link>
          <Link href="/#case-studies" className="flex items-center py-2" onClick={toggleMenu}>
            事例
          </Link>
          <Link href="/#pricing" className="flex items-center py-2" onClick={toggleMenu}>
            料金
          </Link>
          <Link href="/#contact" className="flex items-center py-2" onClick={toggleMenu}>
            お問い合わせ
          </Link>
          <Button asChild className="bg-primary hover:bg-[#5e3b22]">
            <Link href="/#contact" onClick={toggleMenu}>
              無料相談を予約する
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

