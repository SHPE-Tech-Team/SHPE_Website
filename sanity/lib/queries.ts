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

export const EVENTS_QUERY = groq`*[_type == "event"] | order(date asc) {
  title,
  "slug": slug.current,
  date,
  location,
  description,
  "image": image.asset->url,
  rsvpLink
}`
