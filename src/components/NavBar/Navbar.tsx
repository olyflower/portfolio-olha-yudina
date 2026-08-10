"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "./nav-links";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { useActiveSection } from "./useActiveSection";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const activeId = useActiveSection(sectionIds);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-shadow duration-200 ${
				scrolled ? "shadow-sm bg-background/95" : ""
			}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
				<Link
					href="/"
					className="text-3xl font-bold text-accent transition-transform duration-200 hover:scale-105"
				>
					OY
				</Link>

				<div className="hidden items-center gap-6 md:flex">
					<nav className="flex items-center gap-10">
						{navLinks.map((link, index) => {
							const isActive = activeId === sectionIds[index];
							return (
								<Link
									key={link.href}
									href={link.href}
									className={`border-b-2 pb-1 transition-colors duration-200 hover:text-accent ${
										isActive
											? "border-accent text-accent"
											: "border-transparent text-foreground"
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</nav>

					<ThemeToggle />
				</div>

				<button
					onClick={() => setOpen(true)}
					className="text-foreground md:hidden"
				>
					<Menu size={28} />
				</button>
			</div>

			<MobileMenu
				open={open}
				onClose={() => setOpen(false)}
				activeId={activeId}
			/>
		</header>
	);
}
