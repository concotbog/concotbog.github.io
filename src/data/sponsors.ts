export type Sponsor = {
  id: string;
  name: string;
  logoSrc: string;
  thankYou: string;
  websiteUrl?: string;
};

export const sponsors: Sponsor[] = [
  {
    id: "sigmaxim",
    name: "SIGMAXIM",
    logoSrc: "/pictures/sponsors/sigmaxim.webp",
    thankYou:
      "Thank you for enabling student-led design, testing, and iteration",
    websiteUrl: "https://sigmaxim.com/",
  },
  {
    id: "dymech",
    name: "Dymech",
    logoSrc: "/pictures/sponsors/dymech.png",
    thankYou:
      "Thank you for helping us prototype and manufacture key components",
    websiteUrl: "https://dymech.ca/",
  },
  {
    id: "decarie-hot-dogs",
    name: "Decarie Hot Dogs",
    logoSrc: "/pictures/sponsors/Decarie-Hot-Dogs.png",
    thankYou: "Thank you for helping us making our events special",
    websiteUrl:
      "https://www.ubereats.com/ca/store/decarie-hot-dogs/F1Jsr8E9RPeEBE9vzrBR6w",
  },
  {
    id: "v-rod",
    name: "V-Rod",
    logoSrc: "/pictures/sponsors/vrod.jpeg",
    thankYou: "Thank you for sharing your expertise with us",
    websiteUrl: "https://fiberglassrebar.com/",
  },
  {
    id: "demathieu-bard",
    name: "Demathieu Bard Construction",
    logoSrc: "/pictures/sponsors/demathieu-bard.jpeg",
    thankYou: "Thank you for your insights on our de`signs",
    websiteUrl: "https://fiberglassrebar.com/",
  },
  {
    id: "poulet-rouge",
    name: "Poulet Rouge",
    logoSrc: "/pictures/sponsors/poulet-rouge.png",
    thankYou: "Thank you for enabling us to host great events",
    websiteUrl: "https://locations.poulet-rouge.ca/en/sainte-catherine/",
  },
  {
    id: "kettlemans",
    name: "Kettleman's Bagel",
    logoSrc: "/pictures/sponsors/kettlemans.png",
    thankYou: "Thank you for making our events special",
    websiteUrl: "https://www.kettlemansbagels.ca/",
  },
  {
    id: "fabricville",
    name: "Fabricville",
    logoSrc: "/pictures/sponsors/fabricville.png",
    thankYou:
      "Thank you for inspiring and supporting our team’s costume making",
    websiteUrl: "https://fabricville.com/",
  },
  {
    id: "eca",
    name: "University Partner",
    logoSrc: "/pictures/sponsors/eca.png",
    thankYou: "Thank you to the ECA for supporting us through all these years",
    websiteUrl: "https://ecaconcordia.ca/",
  },
  {
    id: "montagna",
    name: "L'Ébéniste Montagna",
    logoSrc: "/pictures/sponsors/montagna.jpg",
    thankYou:
      "Thank you for giving us access to your knowledge or skills for our technical exhibition",
  },
  {
    id: "velo-recycle",
    name: "Community Sponsor",
    logoSrc: "/pictures/sponsors/velo-recycle.avif",
    thankYou: "Thank you for helping us achieve a more sustainable toboggan",
    websiteUrl: "https://www.ateliervelorecycle.com/",
  },
];
