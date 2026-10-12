# Cutcreatives Showcase

SWIPECUT — COMPLETE AI WEBSITE GENERATION PROMPT

Build a complete, premium, visually distinctive, mobile-first, frontend-only website for Swipecut, a professional video editing agency.

The website must showcase my actual edited videos, demonstrate editing quality, explain our services, and convert visitors into potential clients. It must feel like a high-end creative studio, not a generic agency template.

1. BUSINESS OVERVIEW

Brand name: Swipecut

Industry: Professional video editing and content post-production.

Target audience:

Businesses and brands

Founders and personal brands

Marketing teams

SaaS companies

YouTubers and content creators

Podcasters

Marketing and creative agencies

Educational and knowledge-led brands

Do not position Swipecut exclusively for SaaS or any single niche. It must appeal to a broad range of potential clients.

Services:

Short-form video editing

Long-form video editing

Instagram Reels, YouTube Shorts, and TikTok editing

YouTube video editing

Podcast and talking-head editing

Content repurposing

Motion graphics

Captions, sound design, color correction, and visual enhancement where applicable

Business model: Custom project quotes and monthly editing retainers.

Target monthly client value: ₹50,000–₹1,00,000, depending on deliverables and scope.

Team: A small team of video editors.

Markets: India and international clients.

Current proof: Actual edited videos and raw-versus-edited comparisons.

Pricing: Custom quotes. Do not display invented prices.

2. STRICT REQUIREMENT: FRONTEND ONLY

Build only the frontend.

Preferred stack:

React

TypeScript

Tailwind CSS

Reusable components

Client-side routing where appropriate

Static assets and local portfolio data

Do not create:

A backend

A Node.js or Express server

A database

API routes

Serverless functions

Authentication

An admin dashboard

A custom upload system

Backend email delivery

Backend deployment infrastructure

All navigation, video players, portfolio filtering, modal interactions, animations, accordions, and form validation must work on the frontend.

The website should be deployable as a static frontend.

The contact form must not pretend to send or save leads without a real configured destination. If no external contact service is configured, clearly identify this limitation and provide an honest contact option once the business email is supplied.

3. VISUAL DIRECTION

Create a premium creative-studio aesthetic combining sophisticated editorial design with experimental layouts.

The website must feel original, modern, and art-directed.

Use:

Oversized typography

Editorial compositions

Asymmetrical video layouts

Varied video aspect ratios

Generous whitespace

Strong visual hierarchy

Fine borders

Refined typography

Carefully placed accent colors

Subtle, purposeful animations

High-quality video thumbnails

Avoid:

Generic AI website templates

Repetitive three-card layouts

Excessive rounded cards

Generic corporate stock photography

Random gradients

Excessive glassmorphism

Unnecessary 3D elements

Excessive animation

Generic SaaS dashboard aesthetics

Mandatory light theme

The entire website must use a light theme.

Suggested color palette:

Background: #FAF9F6

Secondary background: #F0EFEA

White surfaces: #FFFFFF

Primary text: #20201E

Secondary text: #66645F

Borders: #DFDDD6

Primary accent: #FF5A36

Optional secondary accent: #C8F169

Use Space Grotesk or a similar distinctive sans-serif for headlines and Inter or a similar readable sans-serif for body text.

Strictly prohibit dark-mode sections, black hero backgrounds, dark footers, charcoal full-screen sections, and theme switching. Dark footage within video frames is acceptable, but the surrounding interface must always remain light.

4. WEBSITE PAGES

Create the following pages:

Home

Services

Work / Portfolio

About / Process

Contact / Get a Quote

Privacy Policy

Use working navigation and internal links. If using a single-page layout, implement functional section navigation and dedicated portfolio and contact views.

Do not create empty pages or dead links.

5. NAVIGATION

Create a clean, premium navigation bar.

Include:

Swipecut logo or wordmark

Work

Services

Process

About

Get a Quote

Requirements:

Sticky navigation

Light background

Subtle bottom border

Responsive mobile menu

Accessible menu controls

Clear hover and focus states

Working links and CTA destinations

Use my existing logo if supplied. If not, create a clean typographic wordmark that can be replaced later.

Do not invent social media URLs or contact details.

6. HOMEPAGE HERO

Create a visually striking first screen that immediately demonstrates video editing expertise.

Headline:

Your footage. Our edit. Content worth watching.

Supporting text:

"From scroll-stopping short-form videos to polished long-form content, Swipecut helps businesses, brands, founders, and creators turn raw footage into content ready to publish."

Primary CTA: "Let's Talk About Your Content"

Secondary CTA: "Explore Our Work"

Service label:

"Short-form • Long-form • Content Repurposing"

Hero visual

Create an editorial video composition using a large featured video and smaller overlapping or offset frames.

Show different formats where actual footage is available:

Vertical 9:16 videos

Horizontal 16:9 videos

Square 1:1 videos

Use my actual edited videos whenever supplied.

If no videos are supplied, use clearly replaceable development placeholders. Never present placeholder content as actual client work.

The hero should feel like a premium creative studio's showreel.

On mobile, reorganize the layout into a clean vertical composition. Do not simply shrink the desktop design.

7. HERO SHOWREEL

Build a functional showreel component with:

Actual video playback

Attractive poster thumbnail

Clear play and pause controls

Responsive aspect ratios

Accessible controls

Mobile-friendly sizing

Lightweight loading

Muted preview only if autoplay is necessary

No autoplay with sound

Allow me to replace the video URL and thumbnail without changing the component implementation.

If no video is configured, show a clearly identified placeholder.

8. PORTFOLIO GALLERY

Create a dedicated Work page and a featured portfolio section on the homepage.

Headline:

Don't take our word for it. Watch the edits.

Supporting text:

"Different formats. Different styles. One focus: making every cut count."

Provide functional filters:

All Work

Short-form

Long-form

Talking Head

Podcast

Motion Graphics

Content Repurposing

Only show categories with actual work or clearly marked development placeholders.

Portfolio item requirements

Each project should support:

Project title

Video thumbnail

Video URL

Category

Aspect ratio

Optional description

Optional editing techniques

Featured status

Play button

Use a visually varied editorial grid instead of identical cards.

Clicking a project should open a video modal or project detail view.

Include working video controls, an accessible close button, Escape-to-close behavior, and correct focus handling.

Pause playback when the modal closes. Never autoplay audio.

On mobile, essential interactions must work without hover.

9. EASY VIDEO REPLACEMENT SYSTEM

This is one of the most important requirements.

Create a central portfolio data file, such as:

src/data/portfolio.ts

Define a reusable TypeScript structure containing:

id

title

category

videoUrl

thumbnailUrl

aspectRatio

description

featured

mediaType

Example:

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  aspectRatio: "9:16" | "16:9" | "1:1";
  description?: string;
  featured: boolean;
  mediaType: "mp4" | "embed";
};

export const portfolio: PortfolioItem[] = [
  {
    id: "sample-edit-01",
    title: "Replace With Actual Project Title",
    category: "Short-form",
    videoUrl: "/videos/your-edited-video.mp4",
    thumbnailUrl: "/images/your-video-thumbnail.jpg",
    aspectRatio: "9:16",
    description: "Replace with the actual project description.",
    featured: true,
    mediaType: "mp4"
  }
];


This is an example structure, not a claim that these files already exist.

Build all portfolio sections from this data structure.

Create reusable components:

VideoCard

VideoPlayer

PortfolioGrid

PortfolioFilters

ProjectModal

FeaturedShowreel

BeforeAfterComparison

I must be able to add, remove, or replace videos by updating the portfolio data and media files rather than rewriting the page components.

Include clear comments explaining how to add new portfolio entries.

10. HOW I WILL ADD MY OWN VIDEOS

Support two methods.

Method A: Local files

Allow me to place optimized MP4 files in:

public/videos/

Place thumbnail images in:

public/images/

Reference them using paths such as:

/videos/my-edit.mp4

/images/my-edit-thumbnail.jpg

These are examples. Do not assume the files exist until added.

Document exactly how to place the files and register each video in the portfolio data.

Method B: Hosted video URLs

Allow direct video URLs from suitable hosting or storage services.

Support official video embeds where appropriate.

Do not treat a normal webpage URL as a direct MP4 URL.

Do not invent media URLs.

Explain how to replace hosted URLs and thumbnail URLs.

Video performance requirements

Use compressed poster images.

Lazy-load videos below the fold.

Avoid preloading every video.

Reserve media dimensions to prevent layout shifts.

Avoid unnecessary mobile data consumption.

Pause inactive players where practical.

Use optimized MP4 files or suitable hosted players.

Keep the video data separate from the UI code.

11. RAW-VERSUS-EDITED COMPARISON

Create a signature before-and-after section.

Headline:

Same footage. Completely different experience.

Supporting text:

"Good editing is more than cutting clips together. It's pacing, clarity, sound, storytelling, and knowing what deserves the viewer's attention."

Implement a functional comparison that lets users watch:

Raw footage

Final edited video

Use the actual matching raw and edited footage I supply.

Allow both video URLs to be configured through the portfolio data or a dedicated comparison data file.

Label the versions clearly.

On desktop, use a side-by-side layout when appropriate. On mobile, stack the videos or provide a simple accessible toggle.

Do not pair unrelated footage and imply that it is the same project.

Do not invent engagement statistics or performance results.

12. SERVICES PAGE

Headline:

Everything your video needs after the shoot.

Explain the services using editorial layouts, varied media, and clear descriptions.

Short-form editing

For Reels, Shorts, TikTok, and other short-video formats.

Possible deliverables:

Captions

Hook-focused editing

B-roll

Sound design

Motion graphics

Platform-specific formatting

Long-form editing

For YouTube, interviews, educational videos, and longer content.

Possible deliverables:

Story structure

Pacing

Audio balancing

Color correction

Multicam editing

Supporting graphics

Content repurposing

Turn existing long-form footage into multiple short-form assets.

Show the visual workflow:

ONE LONG VIDEO → MULTIPLE SHORT CLIPS → READY-TO-PUBLISH CONTENT

Do not promise a specific number of clips without an agreed scope.

Podcast and talking-head editing

For interviews, podcasts, personal brands, and presenter-led content.

Motion graphics and visual enhancement

For purposeful animated titles, callouts, and visual explanations.

Only claim services Swipecut actually offers.

Every service must include a working CTA leading to the quote form.

13. PROCESS SECTION

Headline:

You send the footage. We handle the edit.

Present a clear four-step workflow.

01 — Tell us what you need.

02 — Share your footage and references.

03 — We edit and refine.

04 — Receive your finished videos.

Use a horizontal layout on desktop and a vertical layout on mobile.

Explain that delivery timelines, revision limits, and deliverables are agreed upon before work begins.

Do not invent guaranteed turnaround times or unlimited revisions.

14. WHY SWIPECUT

Headline:

Less time editing. More time creating.

Present four practical benefits:

Consistent output.

Editing aligned with the client's brand.

Multiple formats through one workflow.

A dependable feedback and delivery process.

Use real portfolio examples where available.

Do not invent client logos, testimonials, awards, years of experience, engagement metrics, or customer results.

15. MONTHLY EDITING PARTNERSHIP

Headline:

Your content calendar deserves a reliable editing partner.

Explain how recurring editing arrangements can be scoped around:

Monthly content volume

Video formats

Editing complexity

Captions and graphics

Revision requirements

Delivery frequency

CTA: "Build My Editing Plan"

Keep pricing custom. Do not invent package prices or delivery guarantees.

16. ABOUT PAGE

Create a concise About page explaining Swipecut's approach to video editing and repeatable content delivery.

Present the business as a small editing team serving clients in India and internationally.

Emphasize:

Creative quality

Communication

Consistency

Editing workflows

Reliable delivery

Do not invent founder biographies, team member identities, office addresses, or client history.

17. CONTACT AND QUOTE FORM

Create a polished, frontend-only inquiry form.

Fields:

Name

Work email

Company or brand

Business or creator type

Services required

Monthly video volume

Project description

Optional website

Optional budget range

Implement client-side validation and accessible error messages.

The form must work well on mobile.

Strictly prohibit backend development, database integration, custom API endpoints, or server-side form processing.

Do not claim that a lead has been sent or stored unless a real external service confirms it.

If no contact destination is configured, show a clear notice that contact submission must be configured before launch.

Once I supply a real business email, a mailto link can be used as a simple frontend-only contact option.

Do not invent an email address, phone number, WhatsApp number, or booking URL.

18. FAQ SECTION

Create an accessible accordion answering:

What types of videos do you edit?

Do I provide the raw footage?

Can you match my brand style?

Do you offer monthly retainers?

How is pricing determined?

How do revisions work?

How do I send files?

Can you work with international clients?

How do I get started?

Provide concise, realistic answers without unsupported claims.

19. FINAL CTA AND FOOTER

Final CTA headline:

Let's make your next video worth watching.

Supporting text:

"Tell us what you're creating, how often you publish, and what you need from your editing partner."

Primary CTA: "Start a Project"

Secondary CTA: "View Our Work"

Both buttons must lead to working destinations.

The footer must include:

Swipecut wordmark

Brief description

Navigation

Services links

Contact link

Privacy Policy

Real social links only when supplied

Dynamically generated copyright year

Keep the entire footer light-themed.

20. RESPONSIVE DESIGN

Build mobile-first layouts and test approximately at:

320px

360px

390px

430px

768px

1024px

1440px and above

Requirements:

No horizontal overflow.

No clipped headlines.

No broken video aspect ratios.

No tiny buttons.

No inaccessible hover-only interactions.

No overlapping controls.

No desktop layouts simply scaled down to fit mobile.

Use fluid typography, responsive grids, touch-friendly controls, and appropriate spacing.

Aim for touch targets around 44px or larger where practical.

21. ANIMATIONS AND INTERACTIONS

Use subtle, intentional motion:

Headline entrances

Section reveals

Thumbnail hover transitions

Link underline animations

Smooth menu transitions

Subtle graphic movement

Avoid:

Excessive parallax

Scroll hijacking

Constantly moving elements

Unnecessary 3D effects

Long intro animations

Animation that blocks content

Respect reduced-motion preferences.

All essential functionality must remain available without animation.

22. ACCESSIBILITY

Implement:

Semantic HTML

Logical heading hierarchy

Keyboard navigation

Visible focus states

Accessible dialogs and accordions

Labeled form fields

Clear validation messages

Appropriate color contrast

Meaningful image alt text

Accessible video controls

Reduced-motion support

23. SEO

Implement:

Unique page titles and descriptions

Descriptive URLs

Correct heading hierarchy

Open Graph metadata

Social-sharing previews

Descriptive image alt text

Favicon support

Sitemap and appropriate robots directives

Canonical URLs when the production domain is known

Suggested homepage title:

"Swipecut | Professional Video Editing & Content Repurposing"

Suggested meta description:

"Professional short-form and long-form video editing for businesses, brands, founders, creators, and marketing teams. Explore Swipecut's work and request a custom editing quote."

Do not invent business addresses, review ratings, or unsupported structured data.

24. PERFORMANCE

Optimize for fast initial rendering and mobile performance.

Compress video and image assets.

Use responsive thumbnails.

Lazy-load nonessential media.

Minimize JavaScript.

Avoid unnecessary dependencies.

Reserve video and image space.

Use efficient font loading.

Avoid autoplaying video with sound.

Do not load all portfolio videos immediately.

Aim for strong Core Web Vitals and a Lighthouse performance score of 90+ where practical.

25. CODE QUALITY

Use reusable React components and maintainable TypeScript.

Keep portfolio data, design tokens, service content, and FAQ content separate from presentation components.

Do not introduce unnecessary libraries.

Do not create backend infrastructure.

Ensure all interactive elements have real behavior rather than being decorative.

26. HONESTY REQUIREMENTS

Never fabricate:

Client testimonials

Client logos

Case studies

Video views

Engagement rates

Revenue results

Awards

Years of experience

Partnerships

Customer ratings

Use actual supplied videos and clearly identified placeholders for missing assets.

Do not invent contact details or social links.

27. BUILD AND TEST

Build the complete website, not just a mockup.

Before finishing:

Test every page and navigation link.

Test all CTA destinations.

Test portfolio filters.

Test video playback.

Test modal open and close behavior.

Test raw-versus-edited controls.

Test mobile navigation.

Test form validation.

Check missing media and broken links.

Check horizontal overflow.

Check console errors.

Check accessibility and reduced-motion behavior.

Confirm the entire site uses a light theme.

Confirm no backend, database, API routes, or server-side features were created.

28. HANDOVER REQUIREMENTS

After building, explain:

How to add my own edited videos.

Where to place MP4 files.

Where to place thumbnails.

How to add videos to the portfolio data file.

How to feature a video on the homepage.

How to add raw-versus-edited comparisons.

How to update brand colors and text.

How to configure a real contact destination.

How to deploy the static frontend.

Use actual supplied assets whenever available.

If an asset is missing, make it easy to replace and identify it clearly.

Make independent design decisions without waiting for approval on minor details.

The finished website must be visually distinctive, premium, mobile-friendly, video-focused, easy to maintain, and commercially useful.

Build the complete working Swipecut frontend now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cutcreatives-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/71229a3f-cc13-50c8-b898-4feb86d1488c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
