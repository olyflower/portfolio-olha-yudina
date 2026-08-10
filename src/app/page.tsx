import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Reveal from "@/components/Reveal";

export default function Home() {
	return (
		<>
			<Navbar />

			<main>
				<Hero />

				<Reveal>
					<About />
				</Reveal>

				<Reveal>
					<Projects />
				</Reveal>

				<Reveal>
					<Services />
				</Reveal>

				<Reveal>
					<Contact />
				</Reveal>
			</main>

			<Footer />
		</>
	);
}
