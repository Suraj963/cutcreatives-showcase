import { useRef, useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  portfolio,
  showreel,
  heroLeft,
  heroRight,
  comparison,
  type PortfolioItem,
} from "@/data/portfolio";
const ratios = { "9:16": "ratio-vertical", "16:9": "ratio-wide", "1:1": "ratio-square" };
function safeEmbed(url: string) {
  try {
    const u = new URL(url);
    return u.protocol === "https:" &&
      ((["www.youtube.com", "www.youtube-nocookie.com"].includes(u.hostname) &&
        u.pathname.startsWith("/embed/")) ||
        (u.hostname === "player.vimeo.com" && u.pathname.startsWith("/video/")))
      ? url
      : null;
  } catch {
    return null;
  }
}
export function VideoPlayer({ item }: { item: PortfolioItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  if (!item.videoUrl)
    return (
      <div className={`empty-media ${ratios[item.aspectRatio]}`}>
        <Play />
        <span>Video coming soon</span>
      </div>
    );
  if (item.mediaType === "embed") {
    const url = safeEmbed(item.videoUrl);
    return url ? (
      <iframe
        className={`video-player ${ratios[item.aspectRatio]}`}
        src={url}
        title={item.title}
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    ) : (
      <p>Please configure an official YouTube or Vimeo embed URL.</p>
    );
  }
  return (
    <video
      ref={ref}
      className={`video-player ${ratios[item.aspectRatio]}`}
      poster={item.thumbnailUrl}
      controls
      playsInline
      preload="none"
      onPlay={() => {
        document.querySelectorAll("video").forEach((video) => {
          if (video !== ref.current) video.pause();
        });
      }}
      aria-label={item.title}
    >
      <source src={item.videoUrl} type="video/mp4" />
      {item.fallbackVideoUrl && <source src={item.fallbackVideoUrl} type="video/webm" />}
    </video>
  );
}
export function VideoCard({
  item,
  onOpen,
  priority = false,
}: {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
  priority?: boolean;
}) {
  return (
    <article className={`video-card ${ratios[item.aspectRatio]}`}>
      <Button
        variant="media"
        className="thumbnail-button"
        onClick={() => onOpen(item)}
        aria-label={`Play ${item.title}`}
      >
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          loading={priority ? "eager" : "lazy"}
          width={item.aspectRatio === "9:16" ? 768 : 1440}
          height={item.aspectRatio === "9:16" ? 1152 : 960}
        />
        <span className="preview-label">
          {item.isPlaceholder ? "PREVIEW" : item.category.toUpperCase()}
        </span>
        <span className="play-disc">
          <Play fill="currentColor" size={19} />
        </span>
        <span className="media-category">
          {item.category}
          <ArrowUpRight size={16} />
        </span>
      </Button>
    </article>
  );
}
export function ProjectModal({
  item,
  onClose,
}: {
  item: PortfolioItem | null;
  onClose: () => void;
}) {
  const trigger = useRef<HTMLElement | null>(null);
  return (
    <Dialog
      open={!!item}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className="project-modal"
        onOpenAutoFocus={() => {
          trigger.current =
            document.activeElement instanceof HTMLElement ? document.activeElement : null;
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          trigger.current?.focus();
        }}
      >
        {item && (
          <>
            <DialogTitle>{item.title}</DialogTitle>
            <DialogDescription>
              {item.isPlaceholder
                ? "preview."
                : item.description || item.category}
            </DialogDescription>
            <VideoPlayer item={item} />
            {item.techniques && <p className="techniques">{item.techniques.join(" Â· ")}</p>}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
export function PortfolioFilters({
  active,
  onChange,
}: {
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="portfolio-filters" aria-label="Filter portfolio">
      {["All Work", ...new Set(portfolio.map((p) => p.category))].map((category) => (
        <Button
          variant={active === category ? "filterActive" : "filter"}
          key={category}
          onClick={() => onChange(category)}
          aria-pressed={active === category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
export function PortfolioGrid({ featured = false }: { featured?: boolean }) {
  const [active, setActive] = useState("All Work");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const items = portfolio.filter(
    (p) => (!featured || p.featured) && (active === "All Work" || p.category === active),
  );
  return (
    <>
      {/* {!featured && <PortfolioFilters active={active} onChange={setActive} />} */}
      <div className={`portfolio-grid ${featured ? "featured-grid" : ""}`}>
        {items.map((item) => (
          <div className="portfolio-entry" key={item.id}>
            <VideoCard item={item} onOpen={setSelected} />
            <div className="project-caption">
              <h3>{item.title}</h3>
              <span>{item.aspectRatio}</span>
            </div> 
          </div>
        ))}
      </div>
      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
export function FeaturedShowreel() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const left = heroLeft;
  const right = heroRight;
  if (!showreel) return <div className="empty-media">Showreel not configured.</div>;
  return (
    <>
      <div className="hero-composition">
        <div className="hero-side hero-left">
          <span className="frame-number">01 / MOTION GRAPHICS</span>
          {left && <VideoCard item={left} onOpen={setSelected} priority />}
        </div>
        <div className="hero-main">
          <div className="hero-film">
            <VideoCard item={showreel} onOpen={setSelected} priority />
            <div className="caption-overlay">
              Every story.
              <br />
              <strong>A sharper cut.</strong>
            </div>
          </div>
          <div className="film-caption">
            <span>
              <span className="status-dot" /> THE SWIPECUT EDIT
            </span>
            <Button
              variant="link"
              onClick={() => {
                if (showreel) setSelected(showreel);
              }}
            >
              Play preview <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="hero-side hero-right">
          {right && <VideoCard item={right} onOpen={setSelected} priority />}
          <span className="frame-number">03 / MOTION GRAPHICS</span>
          <div className="studio-note">
            Good footage is a start.
            <br />A good edit makes it count.
          </div>
        </div>
      </div>
      <p className="demo-disclosure">
        Illustrative development previews. Your actual edited videos belong here.
      </p>
      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
export function BeforeAfterComparison() {
  const [active, setActive] = useState<"raw" | "edited">("edited");
  const configured = !!comparison.rawVideoUrl && !!comparison.editedVideoUrl;
  return (
    <div className="comparison-layout">
      <div>
        <span className="eyebrow">THE DIFFERENCE IS IN THE DETAILS</span>
        <h2>
          Same footage.
          <br />
          Completely different
          <br />
          <span className="text-primary">experience.</span>
        </h2>
        <p>
          Good editing is more than cutting clips together. It's pacing, clarity, sound,
          storytelling, and knowing what deserves the viewer's attention.
        </p>
      </div>
      <div>
        <div className="comparison-tabs">
          {(["raw", "edited"] as const).map((v) => (
            <Button
              key={v}
              variant={active === v ? "filterActive" : "filter"}
              aria-pressed={active === v}
              onClick={() => setActive(v)}
            >
              {v === "raw" ? "Raw footage" : "Final edit"}
            </Button>
          ))}
        </div>
        {configured ? (
          <VideoPlayer
            key={active}
            item={{
              id: active,
              title: active === "raw" ? "Raw footage" : "Final edit",
              category: "Talking Head",
              videoUrl: active === "raw" ? comparison.rawVideoUrl : comparison.editedVideoUrl,
              thumbnailUrl:
                active === "raw" ? comparison.rawThumbnailUrl : comparison.editedThumbnailUrl,
              aspectRatio: "16:9",
              featured: false,
              mediaType: comparison.mediaType,
            }}
          />
        ) : (
          <div className="comparison-placeholder">
            <span className="comparison-mark">{active === "raw" ? "[ RAW ]" : "[ REFINED ]"}</span>
            <p>{active === "raw" ? "The original footage." : "The finished story."}</p>
            <small>Matching raw and edited footage has not been supplied.</small>
          </div>
        )}
        <span className="comparison-footnote">
          {configured
            ? "One project. Two perspectives."
            : "A real comparison will appear when a matching video pair is added."}
        </span>
      </div>
    </div>
  );
}

