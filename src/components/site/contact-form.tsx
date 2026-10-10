import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, services } from "@/data/content";
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const configured = !!site.contactEmail;
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const key of ["name", "email", "company", "type", "volume", "description"])
      if (!String(data.get(key) || "").trim()) next[key] = "Please complete this field.";
    if (data.get("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email"))))
      next["email"] = "Enter a valid email address.";
    if (!selected.length) next["services"] = "Choose at least one service.";
    const website = String(data.get("website") || "");
    if (website && !/^https?:\/\/.+\..+/.test(website))
      next["website"] = "Use a full URL starting with https://.";
    setErrors(next);
    setNotice("");
    if (Object.keys(next).length) {
      requestAnimationFrame(() =>
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      );
      return;
    }
    if (!configured) {
      setNotice(
        "Your brief is complete, but nothing has been sent or saved. Swipecut’s business email must be configured before launch.",
      );
      return;
    }
    const body =
      [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n") +
      "\nServices: " +
      selected.join(", ");
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Swipecut project inquiry")}&body=${encodeURIComponent(body)}`;
    setNotice(
      "Your email app was opened with your brief. Review it and press send there; this website has not sent or saved your inquiry.",
    );
  }
  function field(key: string, label: string, type = "text", optional = false) {
    return (
      <div className="form-field">
        <label htmlFor={key}>
          {label}
          {optional ? <span> (optional)</span> : <span> *</span>}
        </label>
        <input
          id={key}
          name={key}
          type={type}
          autoComplete={
            key === "name"
              ? "name"
              : key === "email"
                ? "email"
                : key === "company"
                  ? "organization"
                  : "off"
          }
          aria-invalid={!!errors[key]}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
        />
        {errors[key] && (
          <span className="field-error" id={`${key}-error`}>
            {errors[key]}
          </span>
        )}
      </div>
    );
  }
  function select(key: string, label: string, options: string[]) {
    return (
      <div className="form-field">
        <label htmlFor={key}>{label} *</label>
        <select
          id={key}
          name={key}
          defaultValue=""
          aria-invalid={!!errors[key]}
          aria-describedby={errors[key] ? `${key}-error` : undefined}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        {errors[key] && (
          <span className="field-error" id={`${key}-error`}>
            {errors[key]}
          </span>
        )}
      </div>
    );
  }
  return (
    <form noValidate onSubmit={submit} className="quote-form">
      <div className="contact-notice">
        <Mail size={20} />
        <p>
          {configured
            ? "Your brief will open in your email app. You stay in control of sending it."
            : "Contact submission is not yet configured. You can prepare your brief, but it will not be sent or stored."}
        </p>
      </div>
      <div className="form-grid">
        {field("name", "Your name")}
        {field("email", "Work email", "email")}
        {field("company", "Company or brand")}
        {select("type", "Business or creator type", [
          "Business / brand",
          "Founder / personal brand",
          "Creator / YouTuber",
          "Marketing / creative agency",
          "Podcast / education",
          "Other",
        ])}
      </div>
      <fieldset
        className="service-checkboxes"
        aria-describedby={errors["services"] ? "services-error" : undefined}
      >
        <legend>What can we help with? *</legend>
        {services.map((s) => (
          <label key={s.title}>
            <input
              type="checkbox"
              checked={selected.includes(s.title)}
              aria-invalid={!!errors["services"]}
              onChange={() =>
                setSelected(
                  selected.includes(s.title)
                    ? selected.filter((v) => v !== s.title)
                    : [...selected, s.title],
                )
              }
            />
            <span>{s.title}</span>
            <Check size={16} />
          </label>
        ))}
        {errors["services"] && (
          <p className="field-error" id="services-error">
            {errors["services"]}
          </p>
        )}
      </fieldset>
      <div className="form-grid">
        {select("volume", "Monthly video volume", [
          "One-off project",
          "1–4 videos",
          "5–10 videos",
          "11–20 videos",
          "More than 20",
          "Let’s scope it together",
        ])}
        {field("budget", "Budget range", "text", true)}
      </div>
      <div className="form-field">
        <label htmlFor="description">Tell us about your content *</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          placeholder="What are you creating, and what would a great edit look like?"
          aria-invalid={!!errors["description"]}
          aria-describedby={errors["description"] ? "description-error" : undefined}
        />
        {errors["description"] && (
          <span id="description-error" className="field-error">
            {errors["description"]}
          </span>
        )}
      </div>
      {field("website", "Website", "url", true)}
      <p className="form-privacy">
        Your details stay in this page unless you send them through your email app. Read our{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>
      <Button variant="studio" type="submit">
        {configured ? "Prepare Email" : "Review My Brief"}
        <ArrowUpRight />
      </Button>
      {notice && (
        <p className="submission-notice" role="status">
          {notice}
        </p>
      )}
    </form>
  );
}
