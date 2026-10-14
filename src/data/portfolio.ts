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
// Add one object per project. Use /videos/name.mp4 and /images/name.jpg for local
// files, a direct HTTPS MP4 URL, or an official YouTube/Vimeo embed URL.
// Remove isPlaceholder only when replacing BOTH the demo video and thumbnail.
export const portfolio: PortfolioItem[] = [
  {
    id: "brand-film",
    title: "A little more momentum.",
    category: "Short-form",
    videoUrl: "../../public/videos/brand-film.mp4",
    fallbackVideoUrl: sneakerFallback.url,
    thumbnailUrl: sneaker,
    aspectRatio: "9:16",
    featured: true,
    mediaType: "mp4",
    isPlaceholder: true,
    description: "Illustrative motion preview. Not client work.",
    techniques: ["Pacing", "Sound design", "Product storytelling"],
  },
  {
    id: "founder-story",
    title: "A story worth staying for.",
    category: "Talking Head",
    videoUrl: studioVideo.url,
    fallbackVideoUrl: studioFallback.url,
    thumbnailUrl: studio,
    aspectRatio: "16:9",
    featured: true,
    mediaType: "mp4",
    isPlaceholder: true,
    description: "Generated portrait and animated still for development only. Not a Swipecut edit.",
    techniques: ["Story structure", "Captions", "Visual enhancement"],
  },
  {
    id: "motion-study",
    title: "Ideas, in motion.",
    category: "Motion Graphics",
    videoUrl: motionVideo.url,
    fallbackVideoUrl: motionFallback.url,
    thumbnailUrl: motion,
    aspectRatio: "1:1",
    featured: true,
    mediaType: "mp4",
    isPlaceholder: true,
    description: "Illustrative typography preview. Not client work.",
    techniques: ["Animated titles", "Visual hierarchy"],
  },
  {
    id: "long-story",
    title: "Room for the whole story.",
    category: "Long-form",
    videoUrl: studioVideo.url,
    fallbackVideoUrl: studioFallback.url,
    thumbnailUrl: studio,
    aspectRatio: "16:9",
    featured: false,
    mediaType: "mp4",
    isPlaceholder: true,
  },
  {
    id: "conversation",
    title: "Keep the conversation going.",
    category: "Podcast",
    videoUrl: studioVideo.url,
    fallbackVideoUrl: studioFallback.url,
    thumbnailUrl: studio,
    aspectRatio: "16:9",
    featured: false,
    mediaType: "mp4",
    isPlaceholder: true,
  },
  {
    id: "repurpose",
    title: "One story. More possibilities.",
    category: "Content Repurposing",
    videoUrl: sneakerVideo.url,
    fallbackVideoUrl: sneakerFallback.url,
    thumbnailUrl: sneaker,
    aspectRatio: "9:16",
    featured: false,
    mediaType: "mp4",
    isPlaceholder: true,
  },
];
// Change these IDs to choose the hero videos without editing any UI.
export const showreel = portfolio.find((item) => item.id === "founder-story");
export const heroLeft = portfolio.find((item) => item.id === "brand-film");
export const heroRight = portfolio.find((item) => item.id === "motion-study");
// Configure matching footage here. Leave empty until a REAL raw/edited pair exists.
export const comparison = {
  title: "Raw to refined",
  rawVideoUrl: "",
  editedVideoUrl: "",
  rawThumbnailUrl: "",
  editedThumbnailUrl: "",
  mediaType: "mp4" as const,
};
