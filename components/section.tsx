import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className,
  invert = false,
}: {
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  align?: "left" | "center"
  className?: string
  invert?: boolean
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", invert ? "text-gold" : "text-navy/70")}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-medium sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          invert ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {children && (
        <div
          className={cn(
            "mt-5 text-lg",
            invert ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

/** Image-backed banner used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image: StaticImageData
  imageAlt: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep via-navy-deep/40 to-transparent" />
      <div className="container-page py-24 sm:py-32 lg:py-40">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
