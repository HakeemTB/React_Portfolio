import { useState } from "react";

function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const message = String(formData.get("message"));
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:hakeemtonyben@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with your message ready. Send it there to complete delivery.");
  }

  return (
    <main className="interior-page content-width contact-page">
      <p className="eyebrow">CONTACT</p>
      <h1>Get in touch.</h1>
      <div className="contact-layout">
        <div className="contact-copy">
          <h2>Have a project in mind?</h2>
          <p>
            Send a note about what you’re building and how I can help.
          </p>
          <a href="mailto:hakeemtonyben@gmail.com" className="email-link">
            hakeemtonyben@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" placeholder="Jane Smith" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
          <label htmlFor="message">A little about your project</label>
          <textarea id="message" name="message" rows="4" placeholder="What are you working on?" required />
          <button className="button button-primary submit-button" type="submit">
            Send your note <span aria-hidden="true">↗</span>
          </button>
          {status && <p className="form-status" role="status">{status}</p>}
          <p className="form-disclaimer">
            Submitting opens your default email app; the message is sent when you press Send there.
          </p>
        </form>
      </div>
    </main>
  );
}


export default ContactPage;
