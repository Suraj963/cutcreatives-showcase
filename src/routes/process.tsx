import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ProcessSteps, QuoteLink, FAQ, FinalCTA } from "@/components/site/layout";
import { BeforeAfterComparison } from "@/components/site/media";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/process")({
  head: () =>
    pageHead(
      "Our Editing Process | Swipecut",
      "From footage and references to refinement and finished videos: a clear collaborative editing process.",
      "/process",
    ),
  component: Process,
});
function Process() {
  return (
    <>
      <PageIntro
        label="FOUR STEPS. ONE SHARED VISION."
        title={
          <>
            You send the footage.
            <br />
            We handle the edit<span className="text-primary">.</span>
          </>
        }
        text="Clear communication, intentional edits and a repeatable workflow. Delivery timelines, revision limits and deliverables are agreed before work begins."
      />
      <section className="container section pt-0">
        <ProcessSteps />
        <div className="button-row">
          <QuoteLink>Tell Us What You Need</QuoteLink>
        </div>
      </section>
      <section className="comparison-band">
        <div className="container section">
          <BeforeAfterComparison />
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
