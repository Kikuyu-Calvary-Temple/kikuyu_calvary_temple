import bible from "@/public/images/bible.webp"
import bibleStudy from "@/public/images/bible-study.webp"
import children from "@/public/images/children.webp"
import choir from "@/public/images/choir.webp"
import community from "@/public/images/community.webp"
import elderReading from "@/public/images/elder-reading.webp"
import handsLight from "@/public/images/hands-light.webp"
import heroWorship from "@/public/images/hero-worship.webp"
import piano from "@/public/images/piano.webp"
import praiseTeam from "@/public/images/praise-team.webp"
import prayer from "@/public/images/prayer.webp"
import women from "@/public/images/women.webp"
import worshipHands from "@/public/images/worship-hands.webp"
import youth from "@/public/images/youth.webp"

// Photos sourced from Unsplash (free to use under the Unsplash License).
export const images = {
  bible,
  "bible-study": bibleStudy,
  children,
  choir,
  community,
  "elder-reading": elderReading,
  "hands-light": handsLight,
  "hero-worship": heroWorship,
  piano,
  "praise-team": praiseTeam,
  prayer,
  women,
  "worship-hands": worshipHands,
  youth,
}

export type ImageKey = keyof typeof images
