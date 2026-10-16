import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { steps, faqs } from "@/data/content";
export function Wordmark() {
  return (
    <span className="wordmark">
      swipecut
      <span className="brand-mark">
        <Scissors size={20} />
      </span>
    </span>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const links = [
    ["Work", "/work"],
    ["Services", "/services"],
    ["Process", "/process"],
    ["About", "/about"],
  ] as const;
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" aria-label="Swipecut home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, to]) => (
            <Link key={to} to={to} className={pathname === to ? "active" : ""}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Button asChild variant="studio" className="nav-quote">
            <Link to="/contact">
              Get a Quote <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {[...links, ["Get a Quote", "/contact"] as const].map(([name, to]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {name}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function QuoteLink({ children = "Start a Project" }: { children?: React.ReactNode }) {
  return (
    <Button asChild variant="studio">
      <Link to="/contact">
        {children}
        <ArrowUpRight />
      </Link>
    </Button>
  );
}
export function WorkLink() {
  return (
    <Button asChild variant="studioOutline">
      <Link to="/work">
        View Our Work
        <ArrowUpRight />
      </Link>
    </Button>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <span className="eyebrow">GOOD CONTENT STARTS WITH A CONVERSATION</span>
        <div className="final-cta-grid">
          <h2>
            Let's make your next
            <br />
            video worth watching<span className="text-primary">.</span>
          </h2>
          <div>
            <p>
              Tell us what you're creating, how often you publish, and what you need from your
              editing partner.
            </p>
            <div className="button-row">
              <QuoteLink />
              <WorkLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/">
              <Wordmark />
            </Link>
            <p>
              Thoughtful edits. Better stories.
              <br />A video editing team for your next chapter.
            </p>
            <span className="eyebrow">BASED IN INDIA. CREATING WITHOUT BORDERS.</span>
          </div>
          <div>
            <h3>Explore</h3>
            {/* <Link to="/work">Work</Link> */}
            <Link to="/process">Process</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Get a Quote</Link>
          </div>
          <div>
            <h3>What we do</h3>
            <Link to="/services">Short-form editing</Link>
            <Link to="/services">Long-form editing</Link>
            <Link to="/services">Content repurposing</Link>
            <Link to="/services">Motion graphics</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Swipecut. All rights reserved.</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span>Made for the next frame. ↗</span>
        </div>
      </div>
    </footer>
  );
}
export function ProcessSteps() {
  return (
    <div className="process-steps">
      {steps.map(([title, text], i) => (
        <article key={title}>
          <span className="step-number">
            0{i + 1}
            <ArrowUpRight />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
export function FAQ() {
  return (
    <section className="section container faq-layout">
      <div>
        <span className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</span>
        <h2>
          Good questions.
          <br />
          Straight answers.
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="container page-intro">
      <span className="eyebrow">{label}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
