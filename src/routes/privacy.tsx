import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/layout";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy Policy | Swipecut",
      "How the Swipecut frontend handles inquiry details and video playback.",
      "/privacy",
    ),
  component: Privacy,
});
function Privacy() {
  return (
    <>
      <PageIntro
        label="YOUR PRIVACY MATTERS"
        title="Privacy Policy"
        text="This notice describes the current frontend-only Swipecut website. Update it before launch if contact services, analytics or other integrations change."
      />
      <article className="container privacy-content">
        <h2>Inquiry information</h2>
        <p>
          The quote form collects the information you type only in the current page. This website
          does not save inquiries in a database, browser storage or an email system. A business
          contact destination has not yet been configured.
        </p>
        <h2>Email handoff</h2>
        <p>
          When a real business email is configured, the form can open your email application with an
          inquiry draft. You choose whether to send it. Your email provider then handles that
          message under its own policies.
        </p>
        <h2>Videos and external services</h2>
        <p>
          Video thumbnails and demonstration clips are delivered as static media. If official hosted
          video embeds are added, the video provider may process playback information or use cookies
          under its own privacy policy. Embeds are loaded only when a project is opened.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          No advertising, analytics or tracking integrations have been added by Swipecut to this
          frontend. Your hosting provider may maintain technical delivery and security logs
          according to its policies.
        </p>
        <h2>Contact and updates</h2>
        <p>
          The business privacy contact must be supplied before launch. Do not include sensitive or
          confidential footage in the inquiry form. This notice should be reviewed when the
          website’s contact destination or services change.
        </p>
      </article>
    </>
  );
}
