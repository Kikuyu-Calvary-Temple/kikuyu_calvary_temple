import { Clock } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero, SectionHeading } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import { images } from "@/lib/images"
import { ministries, site, weeklyPrograms } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Programs",
  description: `Sunday services, midweek gatherings and ministries at ${site.name}.`,
}

export default function ProgramsPage() {
  const days = Array.from(new Set(weeklyPrograms.map((p) => p.day)))
  const midweek = weeklyPrograms.filter((p) => p.midweek)

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Our week together."
        description="Sunday worship, midweek prayer and Bible study, and ministries for every age. There’s always a place to gather."
        image={images["praise-team"]}
        imageAlt="Worship leader singing"
      />

      {/* Weekly schedule */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Weekly schedule" title="Gather with us.">
            <p>All are welcome to every gathering. Times may vary on special occasions.</p>
          </SectionHeading>

          <div className="mt-12 divide-y border-y">
            {days.map((day) => (
              <div key={day} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                <h3 className="text-2xl text-navy md:col-span-3">{day}</h3>
                <ul className="grid gap-6 md:col-span-9 md:grid-cols-2">
                  {weeklyPrograms
                    .filter((p) => p.day === day)
                    .map((p) => (
                      <li key={p.name}>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-lg font-semibold text-foreground">
                            {p.name}
                          </span>
                          {p.midweek && (
                            <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-semibold text-navy">
                              Midweek
                            </span>
                          )}
                        </div>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-navy/80">
                          <Clock className="size-3.5" aria-hidden />
                          {p.time}
                        </p>
                        <p className="mt-2 text-muted-foreground">{p.description}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Midweek feature */}
      <section id="midweek" className="scroll-mt-32 bg-navy-deep">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src={images["bible-study"]}
              alt="An open Bible beside a cup of coffee"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="px-5 py-20 sm:px-12 lg:px-16 lg:py-28">
            <SectionHeading invert eyebrow="Midweek services" title="Refuel in the middle of the week.">
              <p>
                Life gets busy. Our midweek gatherings are a place to pause,
                pray and be strengthened by the Word before the weekend.
              </p>
            </SectionHeading>
            <ul className="mt-10 space-y-6">
              {midweek.map((p) => (
                <li key={p.name} className="border-l-2 border-gold pl-5">
                  <p className="eyebrow text-gold">
                    {p.day} · {p.time}
                  </p>
                  <h3 className="mt-2 text-2xl text-white">{p.name}</h3>
                  <p className="mt-1 text-white/70">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Ministries" title="Find your people.">
            <p>
              Ministries are where friendships are formed and faith grows.
              Speak to us after any service to get connected.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <article key={m.slug} id={m.slug} className="scroll-mt-32">
                <Image
                  src={images[m.image]}
                  alt=""
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-2xl text-navy">{m.name}</h3>
                <p className="mt-2 text-muted-foreground">{m.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-page flex flex-col items-start justify-between gap-6 rounded-3xl bg-cream p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl text-navy sm:text-4xl">Want to get involved?</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Tell us which ministry interests you and we’ll connect you.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "h-12 rounded-full px-7 text-base")}
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
