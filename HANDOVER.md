# Swipecut handover

## Current state
This is a frontend-only website: no app backend, APIs, authentication, database, form storage or delivery service. The existing TanStack framework renders the preview and prerenders static pages during production builds. Generated demonstration thumbnails and animated stills are explicitly labeled and are not actual client work. Raw/edited footage and the business email are not configured. No performance score is claimed.

## Add local videos
1. Place a compressed H.264 MP4 with AAC audio and fast-start metadata in `public/videos/` (for example `public/videos/brand-edit.mp4`).
2. Place its compressed JPEG/WebP poster in `public/images/` (for example `public/images/brand-edit.webp`). Aim for a few hundred KB per poster and a short, optimized preview rather than a huge master export.
3. In `src/data/portfolio.ts`, replace or add a project object with a unique `id`, actual `title`, `category`, `videoUrl: '/videos/brand-edit.mp4'`, `thumbnailUrl: '/images/brand-edit.webp'`, correct `aspectRatio`, `featured`, and `mediaType: 'mp4'`. Optional fields: description and techniques.
4. Remove `isPlaceholder: true` only after replacing the demonstration assets with genuine project media.
5. Set `featured: true` to include the project on Home. Set `showreel` to the desired item. The hero currently uses entries 0, 1 and 2: keep at least three entries, and update these selections in `FeaturedShowreel` if needed.

## Hosted media
Use direct HTTPS MP4 URLs with `mediaType: 'mp4'`. Normal YouTube pages, Google Drive pages and Vimeo pages are not MP4s. For embeds use `mediaType: 'embed'` and an official `https://www.youtube-nocookie.com/embed/VIDEO_ID`, `https://www.youtube.com/embed/VIDEO_ID`, or `https://player.vimeo.com/video/VIDEO_ID` URL. Supply a real thumbnail separately. Do not add autoplay-with-sound parameters. Below-fold players load only when opened; videos use preload none. Active MP4 players pause other native players.

For downloaded app media in Lovable, the project asset flow can also be used: `lovable-assets create --file /tmp/clip.mp4 --filename clip.mp4 > src/assets/clip.mp4.asset.json`, then import the pointer and use its `.url`. Local public paths also work for standalone static hosting.

## Raw vs edited
In the `comparison` object in `src/data/portfolio.ts`, set `rawVideoUrl` and `editedVideoUrl` to the genuinely matching pair, plus their poster URLs. The accessible Raw footage / Final edit controls switch the active player and unmount inactive playback. Until both URLs exist, an honest empty state remains.

## Colors and copy
Global semantic colors, type and reusable style rules live in `src/styles.css`. Edit the `:root` colors, not individual components. Shared services, FAQ, steps and email live in `src/data/content.ts`. Page-specific copy lives in `src/routes/`. All pages remain light, including the footer and dialogs.

## Contact
Set `site.contactEmail` in `src/data/content.ts` to your real business email. The form validates required details, then opens an email draft through `mailto:`. It never claims delivery: the visitor must send in their email app. Without an email it only reviews the brief and states nothing was sent or saved. No business addresses or social accounts have been invented. Review the Privacy Policy before launch.

## Static deployment and SEO
Run `bun install` then `bun run build` outside the live editor (the editor handles its own builds). All seven public routes are explicitly configured for static prerendering in `vite.config.ts`. Deploy the generated client/static output (`dist/client` with this template; inspect output after the build) with each route's `index.html` and the generated client assets. Do not deploy the generated Worker/server bundle for a static-only host. Ensure directory index resolution and fallback to index.html for client navigation if the host needs it. Asset pointer URLs rely on Lovable asset hosting; keep pointer paths served by Lovable, or use direct hosted/local media URLs for an independent static host.

Each route has its own title, description, Open Graph and canonical path. Replace relative canonicals with the confirmed production domain if desired. The generated bundled images have no invented absolute social image URL; Lovable supplies its page preview. Update robots and add an absolute-URL sitemap once the real production domain is known. `public/sitemap-template.xml` is a reminder, not a fabricated live sitemap. Keep only real URLs and real business facts. The custom scissors favicon mirrors the wordmark.
