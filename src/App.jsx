import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";

function Header() {
  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Alex Morgan home">
        Alex Morgan
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer content-width">
      <span>© {new Date().getFullYear()} Alex Morgan</span>
      <span>Full-stack developer</span>
      <a href="mailto:hakeemtonyben@gmail.com">Say hello ↗</a>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<main className="not-found content-width"><h1>Page not found<span>.</span></h1><NavLink className="text-link" to="/">Back home ↗</NavLink></main>} />
      </Routes>
      <Footer />
    </div>
  );
}

