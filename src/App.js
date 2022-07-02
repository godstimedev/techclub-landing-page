import Hero from "./components/Hero";
import Interactive from "./components/Interactive";
import Learn from "./components/Learn";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Learn />
      <Interactive />
      <Registration />
      <Testimonial />
    </div>
  );
}

export default App;
