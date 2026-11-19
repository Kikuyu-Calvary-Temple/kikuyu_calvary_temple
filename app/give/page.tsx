import { HandHeart, Landmark, Smartphone } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { PageHero, SectionHeading } from "@/components/section"
import { images } from "@/lib/images"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Give",
  description: `Support the work and mission of ${site.name}.`,
}

export default function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Generosity that changes lives."
        description="Your tithes and offerings help us share the Gospel, care for families and serve Kikuyu."
        image={images.bible}
        imageAlt="An open Bible"
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Why we give" title="Worship through giving.">
              <p>
                “Each of you should give what you have decided in your heart
                to give, not reluctantly or under compulsion, for God loves a
                cheerful giver.”
              </p>
              <p className="mt-2 text-base font-medium text-navy">2 Corinthians 9:7</p>
            </SectionHeading>
            <p className="mt-8 text-lg text-muted-foreground">
              Thank you for partnering with us. Every gift supports ministry
              to children and youth, outreach and missions, the care of those
              in need and the upkeep of God’s house.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl bg-navy-deep p-8 text-white sm:p-10">
              <Smartphone className="size-7 text-gold" aria-hidden />
              <h2 className="mt-5 text-2xl sm:text-3xl">M-Pesa</h2>
              <dl className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <dt className="eyebrow text-white/60">Paybill</dt>
                  <dd className="mt-1 font-heading text-3xl text-gold">
                    {site.mpesa.paybill}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-white/60">Account</dt>
                  <dd className="mt-1 text-lg font-medium">{site.mpesa.account}</dd>
                </div>
              </dl>
              <ol className="mt-8 list-decimal space-y-1 pl-5 text-white/75">
                <li>Go to M-Pesa → Lipa na M-Pesa → Pay Bill</li>
                <li>Enter the business number and account above</li>
                <li>Enter the amount and your PIN, then confirm</li>
              </ol>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border p-6">
                <HandHeart className="size-6 text-navy" aria-hidden />
                <h3 className="mt-4 text-xl text-navy">In person</h3>
                <p className="mt-1 text-muted-foreground">
                  Give during any service through the offering.
                </p>
              </div>
              <div className="rounded-2xl border p-6">
                <Landmark className="size-6 text-navy" aria-hidden />
                <h3 className="mt-4 text-xl text-navy">Bank & pledges</h3>
                <p className="mt-1 text-muted-foreground">
                  For bank details or building pledges,{" "}
                  <Link href="/contact" className="font-semibold text-navy underline underline-offset-4">
                    contact the office
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
