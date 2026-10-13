import { NavLink } from "react-router-dom";

function AboutPage() {
  return (
    <main className="interior-page content-width">
      <p className="eyebrow">ABOUT</p>
      <h1>Full-stack developer.</h1>
      <div className="about-layout">
        <div className="about-copy">
          <h2>Hi, I’m X.</h2>
          <p>
            I enjoy solving practical problems by building complete web
            applications, from responsive interfaces to server-side logic and
            data storage.
          </p>
          <div className="skills-block">
            <p className="eyebrow">AREAS OF FOCUS</p>
            <div className="skill-list">
              <span>Frontend development</span><span>Backend development</span>
              <span>API design</span><span>Database design</span>
            </div>
          </div>
          <NavLink className="text-link" to="/contact">Contact me</NavLink>
        </div>
      </div>
    </main>
  );
}


export default AboutPage;