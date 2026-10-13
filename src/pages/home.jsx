
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const projects = [
  {
    number: "01",
    name: "Sunday Supply",
    type: "E-commerce · 2025",
    description: "A calmer kind of everyday shopping.",
  },
  {
    number: "02",
    name: "Fieldnotes",
    type: "Brand & digital · 2024",
    description: "A little space for your big ideas.",
  },
];

function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="clock-section content-width" aria-label="Local time">
      <span className="eyebrow">LOCAL TIME</span>
      <time className="clock-time" dateTime={now.toISOString()}>
        {now.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </time>
    </section>
  );
}



function HomePage() {
  return (
    <main>
      <section className="hero content-width">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">FULL-STACK DEVELOPER</p>
            <h1>Building useful things for the web.</h1>
            <p className="hero-intro">
              I’m Hakeem. I build web applications from the interface to the
              server, with a focus on clear, dependable software.
            </p>
            <div className="hero-actions">
              <NavLink className="button button-primary" to="/contact">
                Get in touch
              </NavLink>
              <a className="text-link" href="#selected-work">
                View projects
              </a>
            </div>
          </div>
          <img
            className="hero-portrait"
            src="/images/hakeem-portrait.png"
            alt="Illustrated portrait of Hakeem"
            width="768"
            height="768"
          />
        </div>
      </section>

      <Clock />

      <section className="skills-section content-width" aria-labelledby="skills-heading">
        <h2 id="skills-heading">What I work with</h2>
        <p>Frontend · Backend · APIs · Databases · Deployment</p>
      </section>

      <section className="work-section content-width" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROJECTS</p>
            <h2>Selected work</h2>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-info">
                <span className="project-number">{project.number}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>{project.type}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}


export default HomePage;