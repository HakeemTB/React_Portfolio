import { useState } from "react";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
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
          {submitted && (
            <p className="form-success" role="status">
              This demo form does not send messages yet. Please use the email link.
            </p>
          )}
          <p className="form-disclaimer">Demo form — connect it to a form service to receive submissions.</p>
        </form>
      </div>
    </main>
  );
}


export default ContactPage;
