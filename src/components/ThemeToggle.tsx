"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return <div className="h-10 w-10" />;
	}

	return (
		<button
			onClick={toggleTheme}
			aria-label={
				theme === "dark"
					? "Switch to light theme"
					: "Switch to dark theme"
			}
			className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition 
			hover:border-accent hover:text-accent"
		>
			{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	);
}
