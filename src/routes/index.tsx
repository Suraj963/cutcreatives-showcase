import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Asterisk, Layers, CheckCircle2, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedShowreel, PortfolioGrid, BeforeAfterComparison } from "@/components/site/media";
import { QuoteLink, ProcessSteps, FAQ, FinalCTA } from "@/components/site/layout";
import { services, pageHead } from "@/data/content";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Swipecut | Professional Video Editing & Content Repurposing",
      "Professional short-form and long-form video editing for businesses, brands, founders, creators, and marketing teams. Explore Swipecut’s work and request a custom editing quote.",
      "/",
    ),
  component: Home,
});
function Home() {
  return (
    <>
      <section className="home-hero">
        <p className="hero-label">
          <span className="status-dot" /> SMALL TEAM. SHARP EDITS. BIG POSSIBILITIES.
        </p>
        <h1 className="hero-heading reveal">
          Your footage. <span className="edit-word">Our edit.</span>
          <br />
          Content worth <span className="text-primary">watching.</span>
        </h1>
        <p className="hero-description">
          From scroll-stopping short-form videos to polished long-form content, Swipecut helps
          businesses, brands, founders, and creators turn raw footage into content ready to publish.
        </p>
        <div className="button-row">
          <QuoteLink>Let's Talk About Your Content</QuoteLink>
          <Button asChild variant="studioOutline">
            <Link to="/work">
              Explore Our Work
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <FeaturedShowreel />
      </section>
      <div className="service-strip">
        {["Short-form", "Long-form", "Content Repurposing", "Motion Graphics"].map((t) => (
          <span key={t}>
            {t}
            <Asterisk />
          </span>
        ))}
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED FRAMES. INTENTIONAL EDITS.</span>
            <h2>
              Don't take our word for it.
              <br />
              Watch the edits<span className="text-primary">.</span>
            </h2>
            <p>Different formats. Different styles. One focus: making every cut count.</p>
          </div>
          <Link to="/work" className="text-link">
            Explore all work
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <PortfolioGrid featured />
      </section>
      <section className="comparison-band">
        <div className="container section">
          <BeforeAfterComparison />
        </div>
      </section>
      <section className="container section services-preview">
        <div>
          <span className="eyebrow">FROM RAW FILES TO FINAL FRAMES</span>
          <h2>Everything your video needs after the shoot.</h2>
          <p>One editing partner. Every format your story needs.</p>
          <QuoteLink>Find Your Editing Fit</QuoteLink>
        </div>
        <div>
          {services.map((s, i) => (
            <Link to="/services" key={s.title} className="service-line">
              <span>0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>
      <section className="process-band">
        <div className="container section">
          <span className="eyebrow">A CLEAR PROCESS. A BETTER EDIT.</span>
          <h2>
            You send the footage.
            <br />
            We handle the edit.
          </h2>
          <ProcessSteps />
        </div>
      </section>
      <section className="container section benefits-layout">
        <div>
          <span className="eyebrow">WHY SWIPECUT</span>
          <h2>
            Less time editing.
            <br />
            More time creating.
          </h2>
          <p>Creative care, without adding more to your plate.</p>
        </div>
        <div className="benefits-grid">
          {[
            [
              CheckCircle2,
              "Consistent output.",
              "A cohesive editing approach across your content.",
            ],
            [
              Sparkles,
              "Your brand, in every frame.",
              "An editing style shaped around your voice and visual identity.",
            ],
            [
              Layers,
              "More formats. One workflow.",
              "Short-form, long-form and repurposed content under one roof.",
            ],
            [
              Workflow,
              "A process you can rely on.",
              "Clear feedback, agreed scope and organized delivery.",
            ],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Layers;
            return (
              <article key={String(title)}>
                <I size={24} />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="partnership">
        <div className="container partnership-grid">
          <div>
            <span className="eyebrow">NOT JUST A PROJECT. A PARTNERSHIP.</span>
            <h2>Your content calendar deserves a reliable editing partner.</h2>
          </div>
          <div>
            <p>
              For brands and creators publishing regularly, we build a monthly editing arrangement
              around what you actually need. Custom scope. Clear expectations.
            </p>
            <ul className="partnership-list">
              {[
                "Monthly volume",
                "Video formats",
                "Editing complexity",
                "Captions & graphics",
                "Revisions",
                "Delivery frequency",
              ].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <QuoteLink>Build My Editing Plan</QuoteLink>
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
