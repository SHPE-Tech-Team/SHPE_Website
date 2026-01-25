import { groq } from 'next-sanity'

export const COMMITTEES_QUERY = groq`*[_type == "committee"] {
  "id": id.current,
  title,
  shortDescription,
  fullDescription,
  "image": image.asset->url,
  meeting,
  leads[] {
    name,
    role,
    "image": image.asset->url
  },
  links[] {
    label,
    url
  },
  contact,
  email
}`

export const COMMITTEE_BY_ID_QUERY = groq`*[_type == "committee" && id.current == $slug][0] {
  "id": id.current,
  title,
  shortDescription,
  fullDescription,
  "image": image.asset->url,
  meeting,
  leads[] {
    name,
    role,
    "image": image.asset->url
  },
  links[] {
    label,
    url
  },
  contact,
  email
}`

export const EVENTS_QUERY = groq`*[_type == "event"] {
  title,
  "slug": slug.current,
  date,
  dayOfWeek,
  startTime,
  endTime,
  location,
  description,
  "image": image.asset->url,
  rsvpLink,
  badge
}`

export const EXECUTIVE_BOARD_QUERY = groq`*[_type == "executiveBoard"] | order(order asc) {
  name,
  role,
  pronouns,
  year,
  major,
  email,
  note
}`

export const CALENDAR_ID_QUERY = groq`*[_type == "settings"][0].googleCalendarId`

