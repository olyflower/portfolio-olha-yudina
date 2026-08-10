import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative overflow-hidden bg-linear-to-b from-accent/10 via-transparent to-transparent"
		>
			<div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
				<div className="relative h-35 w-35 shrink-0 overflow-hidden rounded-full border border-border sm:h-65 sm:w-65">
					<Image
						src="/avame.jpg"
						alt="Olha"
						fill
						className="object-cover"
						priority
						sizes="(max-width: 640px) 140px, 180px"
					/>
				</div>

				<p className="mt-6 text-lg text-foreground md:mt-8">
					Hi! I&apos;m Olha 👋
				</p>

				<h1 className="mt-3 font-semibold text-3xl md:text-4xl leading-tight text-foreground md:mt-4">
					Software Engineer
					<br />
					Ukraine 🇺🇦 · Remote
				</h1>

				<p className="mt-4 max-w-xl text-base text-muted sm:text-lg md:mt-6">
					I build modern web applications with React, Next.js, Django
					and AI — skills I developed through hands-on projects
					alongside my degree in Software Engineering. I care about
					clean, maintainable code and turning ideas into products
					people actually enjoy using.
				</p>

				<div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-10">
					<Link
						href="#contact"
						className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white 
						transition hover:bg-accent-hover"
					>
						Contact me
						<ArrowRight size={18} />
					</Link>

					<a
						href="/resume.pdf"
						download
						className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium 
						text-foreground transition hover:bg-muted-bg"
					>
						My Resume
						<Download size={18} />
					</a>
				</div>
			</div>
		</section>
	);
}
