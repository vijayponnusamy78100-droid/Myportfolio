import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./index.jsx"
import About from "./about.jsx";
import Skills from "./skill.jsx";
import Education from "./education.jsx";
import Project from "./projects.jsx";
import Nav from "./NavBar.jsx";
import Contect from "./contect.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;