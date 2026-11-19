# Calvary Temple Kikuyu — Website

Next.js (App Router) + Tailwind CSS v4 + shadcn/ui + lucide-react.

```bash
pnpm dev   # http://localhost:3000
```

## Pages

| Route       | Purpose                                                    |
| ----------- | ---------------------------------------------------------- |
| `/`         | Overview: hero, service times, about, midweek, ministries  |
| `/about`    | Story, mission & vision, values, beliefs                   |
| `/programs` | Weekly schedule, midweek services, ministries              |
| `/give`     | M-Pesa and other giving options                            |
| `/contact`  | Contact details, message form, plan-your-visit + map       |

## Editing content

Almost all content (times, programs, ministries, phone, email, paybill, address)
lives in **`lib/site.ts`**. Lines marked `TODO: confirm` are placeholders and
must be verified before going live.

- Images: `public/images/` (photos from Unsplash, free licence). The image
  registry is in `lib/images.ts`.
- Logo: `public/images/logo.png` (navy) and `logo-white.png` (G.E.C.K globe & cross).
- Fonts: Fraunces (headings) and Plus Jakarta Sans (body), set in `app/layout.tsx`.
- Colours: `--navy`, `--navy-deep`, `--gold` and `--cream` in `app/globals.css`.

The contact form currently opens the visitor's email app (`mailto:`). Connect
it to an API route or a form service when a backend is available.
