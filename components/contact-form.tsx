"use client"

import { Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site"

const topics = [
  "General enquiry",
  "Prayer request",
  "Plan a visit",
  "Join a ministry",
  "Counselling / pastoral care",
]

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "")
    const topic = String(data.get("topic") ?? "")
    const body = [
      String(data.get("message") ?? ""),
      "",
      `— ${name}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Email: ${String(data.get("email") ?? "")}`,
    ].join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${topic} — ${name}`
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field = "h-12 rounded-xl bg-background px-4 text-base md:text-base"

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-sm">Full name</Label>
        <Input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone" className="text-sm">Phone</Label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="07xx xxx xxx" className={field} />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="email" className="text-sm">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="topic" className="text-sm">How can we help?</Label>
        <select
          id="topic"
          name="topic"
          className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message" className="text-sm">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-36 rounded-xl bg-background px-4 py-3 text-base md:text-base"
        />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 rounded-full px-8 text-base">
          Send message <Send />
        </Button>
        {sent && (
          <p className="text-sm text-muted-foreground" role="status">
            Your email app should open with your message. If it doesn’t, write
            to us at {site.email}.
          </p>
        )}
      </div>
    </form>
  )
}
