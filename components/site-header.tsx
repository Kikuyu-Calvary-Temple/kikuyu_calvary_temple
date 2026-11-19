"use client"

import { Clock, MapPin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { nav, site } from "@/lib/site"
import logo from "@/public/images/logo.png"

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      {/* Service strip */}
      <div className="bg-navy-deep text-white/85">
        <div className="container-page flex h-9 items-center justify-center gap-6 text-[0.8rem] sm:justify-between">
          <p className="flex items-center gap-2">
            <Clock className="size-3.5 text-gold" aria-hidden />
            <span>{site.serviceSummary}</span>
          </p>
          <p className="hidden items-center gap-2 sm:flex">
            <MapPin className="size-3.5 text-gold" aria-hidden />
            {site.address.line2}
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src={logo}
              alt=""
              className="h-10 w-auto md:h-11"
              preload
            />
            <span className="leading-tight">
              <span className="block font-heading text-lg font-semibold text-navy md:text-xl">
                Calvary Temple
              </span>
              <span className="block text-[0.7rem] font-medium tracking-[0.25em] text-muted-foreground uppercase">
                Kikuyu
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.95rem] font-medium text-foreground/70 transition-colors hover:text-navy",
                  isActive(pathname, item.href) && "text-navy"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact#visit"
              className={cn(
                buttonVariants(),
                "ml-3 h-11 rounded-full px-6 text-[0.95rem]"
              )}
            >
              Plan your visit
            </Link>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <SheetHeader className="border-b p-6">
                <SheetTitle className="font-heading text-xl text-navy">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col px-3 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={
                      isActive(pathname, item.href) ? "page" : undefined
                    }
                    className={cn(
                      "rounded-lg px-4 py-3 text-lg font-medium text-foreground/80 hover:bg-muted",
                      isActive(pathname, item.href) && "bg-muted text-navy"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <Link
                  href="/contact#visit"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "h-12 w-full rounded-full text-base"
                  )}
                >
                  Plan your visit
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
