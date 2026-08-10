import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      {/* Logo */}
      <div className="logo">
        
        <Link to="/" className="text-decoration" onClick={() => setOpen(false)}><h2>Portfolio</h2></Link>

      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/skill" onClick={() => setOpen(false)}>Skills</Link>
        <Link to="/project" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
        <Link to="/contect" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <FaBarsStaggered />
      </div>

    </nav>
  );
}