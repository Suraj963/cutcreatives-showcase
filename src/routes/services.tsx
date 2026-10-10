import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, QuoteLink, FinalCTA, FAQ } from "@/components/site/layout";
import { services, pageHead } from "@/data/content";
export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "Video Editing Services | Swipecut",
      "Short-form, long-form, podcasts, motion graphics and content repurposing, scoped to your brand.",
      "/services",
    ),
  component: Services,
});
function Services() {
  return (
    <>
      <PageIntro
        label="YOUR FOOTAGE HAS POTENTIAL. LET’S FIND IT."
        title={
          <>
            Everything your video needs
            <br />
            after the shoot<span className="text-primary">.</span>
          </>
        }
        text="From the first cut to the final polish. Editing built around your story, your audience and your publishing goals."
      />
      <section className="container">
        {services.map((s, i) => (
          <article className="service-detail" key={s.title}>
            <span className="service-no">0{i + 1}</span>
            <div>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <QuoteLink>Let's Talk {i === 2 ? "Repurposing" : "Editing"}</QuoteLink>
            </div>
            <div>
              <span className="eyebrow">POSSIBLE DELIVERABLES · AGREED TO YOUR SCOPE</span>
              <ul>
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <div className="repurpose-workflow">
          <span>ONE LONG VIDEO</span>
          <ArrowRight />
          <span>MULTIPLE SHORT CLIPS</span>
          <ArrowRight />
          <span>READY-TO-PUBLISH CONTENT</span>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
