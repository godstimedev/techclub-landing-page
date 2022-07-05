import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

//components

import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interactive from "./components/Interactive";
import Learn from "./components/Learn";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Testimonial from "./components/Testimonial";

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
      <Learn />
      <Interactive />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
