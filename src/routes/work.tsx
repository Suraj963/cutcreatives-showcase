import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, FinalCTA } from "@/components/site/layout";
import { PortfolioGrid } from "@/components/site/media";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/work")({
  head: () =>
    pageHead(
      "Work & Portfolio | Swipecut",
      "Explore short-form, long-form, podcast and motion editing at Swipecut.",
      "/work",
    ),
  component: Work,
});
function Work() {
  return (
    <>
      <PageIntro
        label="THE WORK SPEAKS IN FRAMES"
        title={
          <>
            Don't take our word for it.
            <br />
            Watch the edits<span className="text-primary">.</span>
          </>
        }
        text="Different formats. Different styles. One focus: making every cut count."
      />
      <section className="container portfolio-page">
        {/* <p className="demo-disclosure">
          Development previews only — illustrative generated visuals, not actual client work. Actual
          project footage has not been supplied.
        </p> */}
        <PortfolioGrid />
      </section>
      <FinalCTA />
    </>
  );
}
