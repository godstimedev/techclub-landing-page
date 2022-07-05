import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/course" element={<Learn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Learn />
      <Interactive />
      <Testimonial />
      <Cta />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
