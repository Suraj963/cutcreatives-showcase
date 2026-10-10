export const site = { name: "Swipecut", contactEmail: "" }; // Supply a real business email to enable email handoff.
export const services = [
  {
    title: "Short-form editing",
    text: "Small runtime. Big attention. Reels, Shorts, TikToks and social videos shaped around the moments that matter.",
    details: [
      "Hook-focused editing",
      "Captions & B-roll",
      "Sound design",
      "Platform-specific formatting",
    ],
  },
  {
    title: "Long-form editing",
    text: "Give your story room to breathe. Thoughtfully structured YouTube videos, interviews and educational content.",
    details: [
      "Story structure & pacing",
      "Audio balancing",
      "Color correction",
      "Multicam & supporting graphics",
    ],
  },
  {
    title: "Content repurposing",
    text: "Make more of the footage you already have. Turn long-form content into focused, ready-to-publish short clips.",
    details: ["Clip selection", "New hooks & context", "Reframing", "Platform-ready exports"],
  },
  {
    title: "Podcast & talking-head",
    text: "Keep the conversation clear and compelling. Clean edits that let your ideas and personality take the lead.",
    details: ["Conversation pacing", "Multicam editing", "Audio cleanup", "Captions & callouts"],
  },
  {
    title: "Motion & visual enhancement",
    text: "Make the complex feel simple. Purposeful motion, titles and graphics that support your story, not distract from it.",
    details: [
      "Animated titles",
      "Visual explanations",
      "Branded callouts",
      "Color & visual polish",
    ],
  },
];
export const steps = [
  [
    "Tell us what you need.",
    "Your goals, audience, formats and references. We agree on deliverables, timing and revisions before work begins.",
  ],
  [
    "Share your footage and references.",
    "Send the source files through a shared folder or agreed file-transfer service, along with your brand assets.",
  ],
  [
    "We edit and refine.",
    "We shape the story, add the details and work through your consolidated feedback within the agreed scope.",
  ],
  [
    "Receive your finished videos.",
    "Get final exports in the agreed formats, ready for your next publishing day.",
  ],
];
export const faqs = [
  [
    "What types of videos do you edit?",
    "Short-form, YouTube and other long-form videos, podcasts, talking-head content, repurposed clips and motion graphics. We tailor the edit to the format and audience.",
  ],
  [
    "Do I provide the raw footage?",
    "Yes. You provide the footage and any relevant brand assets, references or creative direction. We handle the post-production.",
  ],
  [
    "Can you match my brand style?",
    "Yes. Share your style guide and examples, and we agree on an editing direction that feels like your brand.",
  ],
  [
    "Do you offer monthly retainers?",
    "Yes. Recurring editing arrangements are scoped around your content volume, formats, complexity and publishing schedule.",
  ],
  [
    "How is pricing determined?",
    "Every quote is custom. Video length, source footage, graphics, complexity, revisions and delivery frequency all influence the scope.",
  ],
  [
    "How do revisions work?",
    "Revision rounds and limits are agreed before the project starts. Consolidated feedback helps keep the process clear and efficient.",
  ],
  [
    "How do I send files?",
    "We agree on a shared folder or file-transfer service. You do not need to upload footage through this website.",
  ],
  [
    "Can you work with international clients?",
    "Yes. Swipecut serves clients in India and internationally, with communication and delivery arrangements agreed together.",
  ],
  [
    "How do I get started?",
    "Outline your content, required services and publishing volume on the quote page. The business contact destination must be configured before inquiries can be sent.",
  ],
];
export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
