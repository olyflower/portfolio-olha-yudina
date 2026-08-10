"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navLinks } from "./nav-links";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {
	open: boolean;
	onClose: () => void;
	activeId?: string | null;
};

export default function MobileMenu({ open, onClose, activeId }: Props) {
	if (!open) return null;

	return (
		<>
			<div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />

			<div className="fixed right-0 top-0 z-50 flex h-screen w-72 flex-col border-l border-border bg-muted-bg p-6 shadow-xl">
				<div className="mb-10 flex items-center justify-between">
					<ThemeToggle />

					<button
						onClick={onClose}
						className="text-foreground transition-colors duration-200 hover:text-accent"
					>
						<X size={28} />
					</button>
				</div>

				<nav className="flex flex-col gap-8 text-lg font-medium">
					{navLinks.map((link) => {
						const isActive =
							activeId === link.href.replace("#", "");
						return (
							<Link
								key={link.href}
								href={link.href}
								onClick={onClose}
								className={`w-fit border-b-2 pb-1 transition-colors duration-200 hover:text-accent ${
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
			</div>
		</>
	);
}
