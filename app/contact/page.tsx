import { Baby, BookOpen, Mail, MapPin, Phone, Shirt, Smile } from "lucide-react"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { FacebookIcon } from "@/components/icons"
import { PageHero, SectionHeading } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import { images } from "@/lib/images"
import { site, sundayServices } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} or plan your visit.`,
}

const expect = [
  {
    icon: Smile,
    title: "A warm welcome",
    text: "Our ushers will greet you at the door and help you find a seat.",
  },
  {
    icon: BookOpen,
    title: "Worship & the Word",
    text: "Each service includes lively praise, prayer and Bible-based preaching.",
  },
  {
    icon: Shirt,
    title: "Come as you are",
    text: "There’s no dress code. Wear what you’re comfortable in.",
  },
  {
    icon: Baby,
    title: "Kids are welcome",
    text: "Sunday School runs during the main service for children.",
  },
]

export default function ContactPage() {
  const tel = site.phone.replace(/\s/g, "")

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We’d love to hear from you."
        description="Questions, prayer requests or planning a visit? Reach out and our team will get back to you."
        image={images.prayer}
        imageAlt="People praying together"
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Get in touch" title="Reach the church office." />
            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href={`tel:${tel}`}
                  className="flex items-center gap-4 rounded-2xl border p-5 transition-colors hover:bg-cream"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-navy">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Call us</span>
                    <span className="font-semibold text-navy">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-2xl border p-5 transition-colors hover:bg-cream"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-navy">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted-foreground">Email us</span>
                    <span className="block truncate font-semibold text-navy">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border p-5 transition-colors hover:bg-cream"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-navy">
                    <FacebookIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Follow us</span>
                    <span className="font-semibold text-navy">facebook.com/calvarytemplekikuyu</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-navy">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Visit us</span>
                  <span className="font-semibold text-navy">
                    {site.address.line1}, {site.address.line2}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-cream p-6 sm:p-10 lg:col-span-7">
            <h2 className="text-2xl text-navy sm:text-3xl">Send us a message</h2>
            <p className="mt-2 mb-8 text-muted-foreground">
              Prayer requests are kept confidential and shared only with our
              pastoral team.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Plan your visit */}
      <section id="visit" className="scroll-mt-28 bg-navy-deep py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading invert eyebrow="Plan your visit" title="Your first Sunday.">
              <p>
                Visiting a new church can feel unfamiliar. Here’s what to
                expect so you can relax and enjoy the service.
              </p>
            </SectionHeading>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expect.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <Icon className="size-6 text-gold" aria-hidden />
                  <h3 className="mt-3 text-xl text-white">{title}</h3>
                  <p className="mt-1 text-white/70">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 p-6">
              <p className="eyebrow text-gold">Sunday services</p>
              <ul className="mt-3 space-y-2">
                {sundayServices.map((s) => (
                  <li key={s.name} className="flex justify-between gap-4 text-white/80">
                    <span>{s.name}</span>
                    <span className="font-medium text-white">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative min-h-80 flex-1 overflow-hidden rounded-2xl bg-white/5">
              <iframe
                title={`Map to ${site.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
                className="absolute inset-0 size-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants(),
                "mt-5 h-12 rounded-full bg-gold text-base text-navy-deep hover:bg-gold/90"
              )}
            >
              <MapPin /> Get directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
