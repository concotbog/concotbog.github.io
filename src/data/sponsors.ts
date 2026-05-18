export type Sponsor = {
  id: string
  name: string
  logoSrc: string
  thankYou: string
  websiteUrl?: string
}

export const sponsors: Sponsor[] = [
  {
    id: 'sigmaxim',
    name: 'SIGMAXIM',
    logoSrc: '/pictures/sponsors/sigmaxim.webp',
    thankYou: 'Thank you for enabling student-led design, testing, and iteration.',
    websiteUrl: 'https://sigmaxim.com/',
  },
  {
    id: 'dymech',
    name: 'Dymech',
    logoSrc: '/pictures/sponsors/dymech.png',
    thankYou: 'Thank you for helping us prototype and manufacture key components.',
    websiteUrl: 'https://dymech.ca/',
  },
  {
    id: 'fabricville',
    name: 'Fabricville',
    logoSrc: '/pictures/sponsors/fabricville.png',
    thankYou: 'Thank you for inspiring and supporting our team’s costume making',
    websiteUrl: 'https://fabricville.com/',
  },
  {
    id: 'eca',
    name: 'University Partner',
    logoSrc: '/pictures/sponsors/eca.png',
    thankYou: 'Thank you to the ECA for supporting us through all these years',
    websiteUrl: 'https://ecaconcordia.ca/',
  },
  {
    id: 'montagna',
    name: "L'Ébéniste Montagna",
    logoSrc: '/pictures/sponsors/montagna.jpg',
    thankYou: 'Thank you for giving us access to your knowledge or skills for our technical exhibition.',
  },
  {
    id: 'velo-recycle',
    name: 'Community Sponsor',
    logoSrc: '/pictures/sponsors/velo-recycle.avif',
    thankYou: 'Thank you for helping us achieve a more sustainable toboggan.',
    websiteUrl: "https://www.ateliervelorecycle.com/"
  },
]

