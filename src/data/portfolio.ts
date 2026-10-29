
import studio from "@/assets/studio-demo.jpg";
import sneaker from "@/assets/sneaker-demo.jpg";
import motion from "@/assets/motion-demo.jpg";
import studioVideo from "@/assets/studio-demo.mp4.asset.json";
import sneakerVideo from "@/assets/sneaker-demo.mp4.asset.json";
import motionVideo from "@/assets/motion-demo.mp4.asset.json";
import studioFallback from "@/assets/studio-demo.webm.asset.json";
import sneakerFallback from "@/assets/sneaker-demo.webm.asset.json";
import motionFallback from "@/assets/motion-demo.webm.asset.json";

export type Category =
  | "Short-form"
  | "Long-form"
  | "Talking Head"
  | "Podcast"
  | "Motion Graphics"
  | "Content Repurposing";

export type PortfolioItem = {
  fallbackVideoUrl?: string;
  id: string;
  title: string;
  category: Category;
  videoUrl: string;
  thumbnailUrl: string;
  aspectRatio: "9:16" | "16:9" | "1:1";
  description?: string;
  techniques?: string[];
  featured: boolean;
  mediaType: "mp4" | "embed";
  isPlaceholder?: boolean;
};

// The new video is first, followed by your existing projects.
export const portfolio: PortfolioItem[] = [
  {
    id: "stop-the-manipulation",
    title: "Stop the Manipulation",
    category: "Motion Graphics",
    videoUrl: "/videos/stop-the-manipulation.mp4",
    thumbnailUrl: "/images/stop-the-manipulation.png",
    aspectRatio: "9:16",
    featured: false,
    mediaType: "mp4",
    description: "A motion-graphics edit exploring manipulation and control.",
    techniques: ["Motion graphics", "Visual storytelling", "Typography"],
  },
  {
    id: "brand-film",
    title: "A little more momentum.",
    category: "Short-form",
    videoUrl: "/videos/brand-film.mp4",
    fallbackVideoUrl: sneakerFallback.url,
    thumbnailUrl: "/images/brand-film.png",
    aspectRatio: "9:16",
    featured: true,
    mediaType: "mp4",
    isPlaceholder: true,
    description: "The Swipecut edit.",
    techniques: ["Pacing", "Sound design", "Product storytelling"],
  },
  {
    id: "founder-story",
    title: "A story worth staying for.",
    category: "Talking Head",
    videoUrl: "/videos/founder-story.mp4",
    fallbackVideoUrl: studioFallback.url,
    thumbnailUrl: "/images/founder-story.png",
    aspectRatio: "16:9",
    featured: true,
    mediaType: "mp4",
    isPlaceholder: true,
    description: "The Swipecut edit.",
    techniques: ["Story structure", "Captions", "Visual enhancement"],
  },
  {
    id: "motion-study",
    title: "Ideas, in motion.",
    category: "Motion Graphics",
    videoUrl: "/videos/motionVideo.mp4",
    fallbackVideoUrl: motionFallback.url,
    thumbnailUrl: "/images/motion.png",
    aspectRatio: "1:1",
    featured: true,
    mediaType: "mp4",
    isPlaceholder: true,
    description: "The Swipecut edit.",
    techniques: ["Animated titles", "Visual hierarchy"],
  },
  {
    id: "long-story",
    title: "Room for the whole story.",
    category: "Long-form",
    videoUrl: "/videos/studioVideo.mp4",
    fallbackVideoUrl: studioFallback.url,
    thumbnailUrl: "/images/studio.png",
    aspectRatio: "16:9",
    featured: false,
    mediaType: "mp4",
    isPlaceholder: true,
  },
  {
    id: "conversation",
    title: "Keep the conversation going.",
    category: "Podcast",
    videoUrl: "/videos/studioVideo.mp4",
    fallbackVideoUrl: studioFallback.url,
    thumbnailUrl: "/images/studio.png",
    aspectRatio: "16:9",
    featured: false,
    mediaType: "mp4",
    isPlaceholder: true,
  },
  {
    id: "repurpose",
    title: "One story. More possibilities.",
    category: "Content Repurposing",
    videoUrl: "/videos/sneakerVideo.mp4",
    fallbackVideoUrl: sneakerFallback.url,
    thumbnailUrl: "/images/sneaker.png",
    aspectRatio: "9:16",
    featured: false,
    mediaType: "mp4",
    isPlaceholder: true,
  },
];

// Existing hero selections remain unchanged.
export const showreel = portfolio.find(
  (item) => item.id === "founder-story"
);

export const heroLeft = portfolio.find(
  (item) => item.id === "brand-film"
);

export const heroRight = portfolio.find(
  (item) => item.id === "motion-study"
);

// Existing comparison remains unchanged.
export const comparison = {
  title: "Raw to refined",
  rawVideoUrl: "",
  editedVideoUrl: "",
  rawThumbnailUrl: "",
  editedThumbnailUrl: "",
  mediaType: "mp4" as const,
};
