/**
 * Central site content. Update contact details, times and programs here and
 * every page picks up the change.
 *
 * NOTE: Values marked "TODO: confirm" are placeholders — please verify them
 * with the church office before publishing.
 */

export const site = {
  name: "Calvary Temple Kikuyu",
  shortName: "Calvary Temple",
  affiliation: "Gospel Evangelistic Church of Kenya (G.E.C.K)", // TODO: confirm full name
  tagline: "A ministry of peace and reconciliation",
  /** Short summary shown in the top bar — TODO: confirm */
  serviceSummary: "Sundays 8:00 AM · Wednesdays 5:30 PM",
  description:
    "Calvary Temple Kikuyu is a Spirit-filled family of believers in Kikuyu, Kiambu County — a ministry of peace and reconciliation, loving God and serving our community.",
  address: {
    line1: "Kikuyu Town", // TODO: confirm street / landmark
    line2: "Kikuyu, Kiambu County, Kenya",
  },
  mapQuery: "Calvary Temple Kikuyu, Kikuyu, Kenya",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Calvary+Temple+Kikuyu",
  phone: "+254 700 000 000", // TODO: confirm
  email: "info@calvarytemplekikuyu.org", // TODO: confirm
  mpesa: {
    paybill: "000000", // TODO: confirm
    account: "Tithe / Offering",
  },
  socials: {
    facebook: "https://www.facebook.com/calvarytemplekikuyu/",
    youtube: "", // TODO: add channel URL if available
  },
} as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
] as const

/** Sunday gatherings — TODO: confirm times */
export const sundayServices = [
  { name: "Morning Devotion", time: "8:00 – 9:00 AM" },
  { name: "First Service", time: "9:00 – 10:30 AM" },
  { name: "Celebration Service", time: "10:30 AM – 1:00 PM" },
] as const

export type Program = {
  day: string
  name: string
  time: string
  description: string
  midweek?: boolean
}

/** Weekly rhythm — TODO: confirm days and times */
export const weeklyPrograms: Program[] = [
  {
    day: "Sunday",
    name: "Morning Devotion",
    time: "8:00 – 9:00 AM",
    description:
      "Begin the Lord's day in prayer, scripture and quiet worship before the main services.",
  },
  {
    day: "Sunday",
    name: "First Service",
    time: "9:00 – 10:30 AM",
    description:
      "A focused service of praise, the Word and prayer for the whole family.",
  },
  {
    day: "Sunday",
    name: "Celebration Service",
    time: "10:30 AM – 1:00 PM",
    description:
      "Our main gathering — vibrant worship, powerful preaching and fellowship.",
  },
  {
    day: "Sunday",
    name: "Sunday School",
    time: "10:30 AM – 1:00 PM",
    description:
      "Age-appropriate Bible lessons, songs and activities for children.",
  },
  {
    day: "Tuesday",
    name: "Intercessory Prayer",
    time: "5:30 – 7:00 PM",
    description:
      "Standing in the gap for our families, church, nation and the world.",
    midweek: true,
  },
  {
    day: "Wednesday",
    name: "Midweek Bible Study",
    time: "5:30 – 7:00 PM",
    description:
      "Go deeper in the Word together. Practical teaching to anchor your week.",
    midweek: true,
  },
  {
    day: "Friday",
    name: "Overnight / Kesha",
    time: "Last Friday · 9:00 PM",
    description:
      "A night of worship, prayer and the Word — every last Friday of the month.",
    midweek: true,
  },
  {
    day: "Saturday",
    name: "Youth Fellowship",
    time: "2:00 – 5:00 PM",
    description:
      "Young people growing in faith, friendship and purpose through the Word and worship.",
  },
]

export const ministries = [
  {
    slug: "children",
    name: "Children's Ministry",
    image: "children",
    description:
      "Raising a generation that knows and loves God through Sunday School, songs and fun, Bible-centred lessons.",
  },
  {
    slug: "youth",
    name: "Youth Ministry",
    image: "youth",
    description:
      "A place for teens and young adults to grow in faith, discover purpose and build lasting friendships.",
  },
  {
    slug: "women",
    name: "Women's Fellowship",
    image: "women",
    description:
      "Women encouraging one another in prayer, the Word and service to families and community.",
  },
  {
    slug: "men",
    name: "Men's Fellowship",
    image: "community",
    description:
      "Men of faith growing as leaders at home, in church and in society through fellowship and accountability.",
  },
  {
    slug: "worship",
    name: "Praise & Worship",
    image: "praise-team",
    description:
      "Singers and musicians leading the church into God's presence every service.",
  },
  {
    slug: "choir",
    name: "Choir",
    image: "choir",
    description:
      "Lifting hymns and songs of praise that tell of God's goodness across generations.",
  },
] as const
