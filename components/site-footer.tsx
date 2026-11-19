import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FacebookIcon, YoutubeIcon } from "@/components/icons"
import { nav, site, sundayServices, weeklyPrograms } from "@/lib/site"
import logoWhite from "@/public/images/logo-white.png"

export function SiteFooter() {
  const midweek = weeklyPrograms.filter((p) => p.midweek)

  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src={logoWhite} alt="" className="h-12 w-auto" />
            <span className="font-heading text-xl font-semibold text-white">
              {site.name}
            </span>
          </Link>
          <p className="mt-5 max-w-sm">
            {site.tagline}. Part of the {site.affiliation} family.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="size-5" />
            </a>
            {site.socials.youtube && (
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
              >
                <YoutubeIcon className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="eyebrow font-sans text-gold">Explore</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow font-sans text-gold">Gather with us</h2>
          <ul className="mt-5 space-y-3">
            {sundayServices.map((s) => (
              <li key={s.name}>
                <span className="block text-white">Sunday · {s.name}</span>
                <span className="text-sm">{s.time}</span>
              </li>
            ))}
            {midweek.map((p) => (
              <li key={p.name}>
                <span className="block text-white">
                  {p.day} · {p.name}
                </span>
                <span className="text-sm">{p.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="eyebrow font-sans text-gold">Contact</h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>© {site.name}. All rights reserved.</p>
          <p>“For God so loved the world…” — John 3:16</p>
        </div>
      </div>
    </footer>
  )
}
