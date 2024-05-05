import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Imports.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./routers/Home.jsx";
import About from "./routers/About.jsx";
import Heroes from "./routers/Heroes.jsx";
import HeroDetails from "./routers/HeroDetails.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters/" element={<Heroes />} />
        <Route path="/characters/:characterId" element={<HeroDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
