import { Routes, Route } from 'react-router-dom';

//components

import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Registration from './routes/Registration';
import About from './routes/About';
import Contact from './routes/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import PreRegister from './components/PreRegister';

function App() {
	AOS.init();
	AOS.init({
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
	});
	return (
		<div style={{ overflowX: 'hidden' }}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/2022-bootcamp" element={<PreRegister />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default App;
