import { groq } from 'next-sanity'

export const COMMITTEES_QUERY = groq`*[_type == "committee"] {
  "id": id.current,
  title,
  shortDescription,
  fullDescription,
  "image": image.asset->url,
  "gallery": gallery[].asset->url,
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
  "gallery": gallery[].asset->url,
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

export const EXECUTIVE_BOARD_QUERY = groq`*[_type == "executiveBoard"] | order(order asc) {
  name,
  role,
  pronouns,
  year,
  major,
  email,
  note
}`

export const SHPETINA_GALLERY_QUERY = groq`* [_type == "shpetina"] {
    "id": _id,
    title,
    "imageUrl": image.asset-> url,
      "alt": image.alt
}`

export const SHPETINA_SPOTLIGHT_QUERY = groq`*[_type == "shpetinaSpotlight"][0] {
  name,
  role,
  "imageUrl": image.asset->url,
  socialLinks
}`
