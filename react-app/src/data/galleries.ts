const allImages = import.meta.glob(
  "/public/pictures/gallery/**/*.{jpeg,jpg,JPG,png}",
  { eager: true, as: "url" },
);

function getImagesFromFolder(folderName: string, title: string) {
  return Object.keys(allImages)
    .filter((path) => path.includes(`/pictures/gallery/${folderName}/`))
    .map((path, index) => {
      // Convert /public/path to /path for the browser
      const src = path.replace("/public", "");
      return {
        id: `${folderName}-${index + 1}`,
        src: src,
        alt: `${title} photo ${index + 1}`,
      };
    });
}

export type Gallery = {
  id: string;
  title: string;
  images: Array<{ id: string; src: string; alt: string }>;
};

export const galleries: Gallery[] = [
  {
    id: "opening",
    title: "Opening Ceremonies",
    images: getImagesFromFolder("opening-ceremony", "Opening"),
  },
  {
    id: "closing",
    title: "Closing Ceremonies",
    images: getImagesFromFolder("closing-ceremony", "Closing"),
  },
  {
    id: "general",
    title: "Team Moments",
    images: getImagesFromFolder("general", "General"),
  },
  {
    id: "race",
    title: "Race Day",
    images: getImagesFromFolder("race-day", "Race Day"),
  },
  {
    id: "party",
    title: "Social Events",
    images: getImagesFromFolder("party", "Party"),
  },
];
