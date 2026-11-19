import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  HandHeart,
  Heart,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import { images } from "@/lib/images"
import { ministries, site, sundayServices, weeklyPrograms } from "@/lib/site"
import { cn } from "@/lib/utils"

const nextSteps = [
  {
    icon: Heart,
    title: "Salvation",
    text: "New to faith? Discover the love of Jesus and begin a new life in Him.",
  },
  {
    icon: Users,
    title: "Membership",
    text: "Make Calvary Temple your home and grow together with a church family.",
  },
  {
    icon: HandHeart,
    title: "Serve",
    text: "Use your gifts — ushering, music, children, media, hospitality and more.",
  },
  {
    icon: BookOpen,
    title: "Grow",
    text: "Join a fellowship and Bible study to go deeper in the Word.",
  },
]

export default function HomePage() {
  const midweek = weeklyPrograms.filter((p) => p.midweek)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <Image
          src={images["hero-worship"]}
          alt="Congregation worshipping with raised hands"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-deep/95 via-navy-deep/60 to-navy-deep/10" />
        <div className="container-page flex min-h-[78svh] flex-col justify-center py-24 lg:min-h-[86svh]">
          <p className="eyebrow text-gold">Welcome to {site.name}</p>
          <h1 className="mt-5 max-w-3xl text-[2.6rem] leading-[1.05] font-medium text-white sm:text-6xl lg:text-7xl">
            A place to belong, believe &amp; become.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            {site.tagline} — loving God, loving people and serving Kikuyu
            with the hope of the Gospel.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#visit"
              className={cn(
                buttonVariants(),
                "h-12 rounded-full bg-gold px-8 text-base text-navy-deep hover:bg-gold/90"
              )}
            >
              Plan your visit
            </Link>
            <Link
              href="/programs"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full border-white/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
              )}
            >
              See our programs
            </Link>
          </div>
        </div>
      </section>

      {/* Service times */}
      <section className="border-b bg-cream">
        <div className="container-page grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex gap-4 py-8 sm:pr-8">
            <Clock className="mt-1 size-5 shrink-0 text-navy" aria-hidden />
            <div>
              <p className="eyebrow text-navy/70">Sunday Services</p>
              <ul className="mt-2 space-y-1">
                {sundayServices.map((s) => (
                  <li key={s.name}>
                    <span className="font-medium text-navy">{s.time}</span>{" "}
                    <span className="text-muted-foreground">· {s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4 py-8 sm:px-8">
            <CalendarDays className="mt-1 size-5 shrink-0 text-navy" aria-hidden />
            <div>
              <p className="eyebrow text-navy/70">Midweek</p>
              <ul className="mt-2 space-y-1">
                {midweek.map((p) => (
                  <li key={p.name}>
                    <span className="font-medium text-navy">{p.day}</span>{" "}
                    <span className="text-muted-foreground">
                      · {p.name}, {p.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4 py-8 sm:pl-8">
            <MapPin className="mt-1 size-5 shrink-0 text-navy" aria-hidden />
            <div>
              <p className="eyebrow text-navy/70">Location</p>
              <p className="mt-2 font-medium text-navy">{site.address.line1}</p>
              <p className="text-muted-foreground">{site.address.line2}</p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy underline-offset-4 hover:underline"
              >
                Get directions <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Image
              src={images["worship-hands"]}
              alt="Believers lifting their hands in worship"
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
            <Image
              src={images["elder-reading"]}
              alt="A mother of the church reading her Bible"
              placeholder="blur"
              sizes="240px"
              className="absolute -right-3 -bottom-10 hidden aspect-[3/4] w-48 rounded-2xl border-8 border-background object-cover shadow-xl sm:block lg:-right-10 lg:w-56"
            />
          </div>
          <div>
            <SectionHeading eyebrow="About us" title="Rooted in faith. Reaching Kikuyu.">
              <p>
                {site.name} is a Spirit-filled, Bible-believing church and part
                of the {site.affiliation} family. We are a ministry of peace and
                reconciliation — bringing people to Christ, and to one another.
              </p>
              <p className="mt-4">
                Whether you are exploring faith for the first time or looking
                for a church home, there is room for you at our table. Come as
                you are.
              </p>
            </SectionHeading>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t pt-8">
              {[
                ["Worship", "Encounter God"],
                ["Word", "Grow in truth"],
                ["Witness", "Serve others"],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-heading text-xl text-navy sm:text-2xl">{t}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/about"
              className={cn(buttonVariants(), "mt-10 h-12 rounded-full px-7 text-base")}
            >
              Learn more about us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Anchor your week */}
      <section className="bg-navy-deep py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading invert eyebrow="Midweek" title="Anchor your week.">
              <p>
                Sunday is just the beginning. Join us midweek to pray, study
                the Word and be refreshed for the days ahead.
              </p>
            </SectionHeading>
            <Link
              href="/programs"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-gold hover:text-white"
            >
              Full weekly schedule <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {midweek.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.07]"
              >
                <p className="eyebrow text-gold">{p.day}</p>
                <h3 className="mt-3 text-2xl text-white">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-white/60">{p.time}</p>
                <p className="mt-4 text-white/75">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-20 lg:py-32">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Engage"
            title="There’s a place for you."
          >
            <p>Wherever you are on your journey, here is your next step.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border bg-card p-7">
                <span className="grid size-12 place-items-center rounded-full bg-cream text-navy">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl text-navy">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full px-7 text-base"
              )}
            >
              Take the next step <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Ministries" title="Grow together, at every stage.">
            <p>
              From little ones to elders, every generation has a home and a
              purpose at Calvary Temple.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ministries.slice(0, 4).map((m) => (
              <Link
                key={m.slug}
                href={`/programs#${m.slug}`}
                className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl p-6"
              >
                <Image
                  src={images[m.image]}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                <h3 className="text-2xl text-white">{m.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy-deep py-24 lg:py-36">
        <Image
          src={images["hands-light"]}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover opacity-60"
        />
        <div className="container-page text-center">
          <Sparkles className="mx-auto size-6 text-gold" aria-hidden />
          <p className="mx-auto mt-6 max-w-3xl font-heading text-3xl leading-snug text-white sm:text-4xl lg:text-5xl">
            “Come to me, all you who are weary and burdened, and I will give
            you rest.”
          </p>
          <p className="mt-5 text-white/70">Matthew 11:28</p>
          <Link
            href="/contact#visit"
            className={cn(
              buttonVariants(),
              "mt-10 h-12 rounded-full bg-gold px-8 text-base text-navy-deep hover:bg-gold/90"
            )}
          >
            Plan your visit
          </Link>
        </div>
      </section>
    </>
  )
}
