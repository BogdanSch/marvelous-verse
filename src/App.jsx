import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./routers/Home.jsx";
import About from "./routers/About.jsx";
import HeroDetails from "./routers/HeroDetails.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:characterId" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
