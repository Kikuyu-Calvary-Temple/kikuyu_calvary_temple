import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero, SectionHeading } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import { images } from "@/lib/images"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — who we are, what we believe and how we serve Kikuyu.`,
}

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Scriptures are the inspired, infallible Word of God and our final authority for faith and life.",
  },
  {
    title: "One God",
    text: "We believe in one God, eternally existing as Father, Son and Holy Spirit.",
  },
  {
    title: "Salvation in Christ",
    text: "We believe salvation is by grace through faith in Jesus Christ, who died for our sins and rose again.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe in the baptism and gifts of the Holy Spirit, empowering believers for holy living and service.",
  },
  {
    title: "The Church",
    text: "We believe the Church is the body of Christ, called to worship, fellowship, discipleship and mission.",
  },
  {
    title: "His Return",
    text: "We believe in the personal, glorious return of the Lord Jesus Christ.",
  },
]

const values = [
  ["Peace", "We pursue peace with God and with one another."],
  ["Reconciliation", "We bring people back to God and restore broken relationships."],
  ["Prayer", "We depend on God in everything, and we are a praying church."],
  ["Family", "We are one family across generations, tribes and backgrounds."],
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A ministry of peace and reconciliation."
        description={`Get to know the heart, beliefs and people of ${site.name}.`}
        image={images["worship-hands"]}
        imageAlt="Congregation in worship"
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who we are" title="One church family in the heart of Kikuyu." />
          </div>
          <div className="space-y-5 text-lg text-muted-foreground lg:col-span-7">
            <p>
              {site.name} is a local congregation of the {site.affiliation}.
              We gather every week to worship God, to hear His Word preached
              with clarity and power, and to pray for one another, our town and
              our nation.
            </p>
            <p>
              Our calling is reconciliation: first between people and God
              through Jesus Christ, and then between people, in families,
              in neighbourhoods and across every divide. We believe the Gospel
              brings real peace that changes homes and communities.
            </p>
            <p>
              Whether you have walked with God for years or are just
              beginning to ask questions, you are welcome here.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-background p-8 sm:p-10">
            <p className="eyebrow text-navy/70">Our mission</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-navy sm:text-3xl">
              To win souls, make disciples and build up the body of Christ
              through the Word, prayer and the power of the Holy Spirit.
            </p>
          </div>
          <div className="rounded-2xl bg-navy-deep p-8 sm:p-10">
            <p className="eyebrow text-gold">Our vision</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-white sm:text-3xl">
              A reconciled people, transformed by Christ, bringing peace and
              hope to Kikuyu and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our values" title="What shapes us." />
            <dl className="mt-10 divide-y border-y">
              {values.map(([t, d]) => (
                <div key={t} className="grid gap-1 py-5 sm:grid-cols-3 sm:gap-6">
                  <dt className="font-heading text-xl text-navy">{t}</dt>
                  <dd className="text-muted-foreground sm:col-span-2">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src={images.community}
            alt="Smiling members of the community"
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/5]"
          />
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-navy-deep py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading invert eyebrow="What we believe" title="Grounded in the Word.">
            <p>
              Our faith rests on the truth of Scripture. Here is a summary of
              what we hold to.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <div key={b.title} className="bg-navy-deep p-8">
                <span className="font-heading text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl text-white">{b.title}</h3>
                <p className="mt-2 text-white/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-page flex flex-col items-start justify-between gap-8 rounded-3xl bg-cream p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl text-navy sm:text-4xl">We’d love to meet you.</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Join us this Sunday or at a midweek gathering.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programs"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full bg-transparent px-7 text-base"
              )}
            >
              Our programs
            </Link>
            <Link
              href="/contact#visit"
              className={cn(buttonVariants(), "h-12 rounded-full px-7 text-base")}
            >
              Plan your visit <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
