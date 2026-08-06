import theLayerHausImg from "../assets/images/TheLayerHaus.png";
import ImageGalleryImg from "../assets/images/ImageGallery.png";
import AutoStudioImg from "../assets/images/AutoStudio.png";
import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "The Layer Haus",
    description:
      "TheLayerHaus interior design studio website showcasing curated interiors, window treatments, and home furnishings.",
    tech: ["HTML", "CSS", "TypeScript"],
    link: "https://auto-studio-eosin.vercel.app/",
    image: theLayerHausImg,
  },
  {
    title: "Image Gallery",
    description:
      "A modern image gallery built with React, TypeScript, and Unsplash API.",
    tech: ["React", "TypeScript"],
    link: "https://image-gallery-one-chi-81.vercel.app/",
    image: ImageGalleryImg,
  },
  {
    title: "AutoStudio",
    description:
      "Luxury vehicle showcase built with React, TypeScript and Vite.",
    tech: ["React", "TypeScript"],
    link: "https://rainbow-dusk-68a6e4.netlify.app/",
    image: AutoStudioImg,
  },
];
