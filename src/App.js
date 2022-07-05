import { Routes, Route } from "react-router-dom";

//components

import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import Registration from "./routes/Registration";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
