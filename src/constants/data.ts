import { Globe, Layers, Palette, Server } from "lucide-react";

import { Briefcase, Code2, Wrench } from "lucide-react";
import {
	SiDjango,
	SiDocker,
	SiJavascript,
	SiNextdotjs,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "react-icons/si";

export const featureCards = [
	{
		Icon: Code2,
		title: "Languages & Styling",
		description: "Python, JavaScript, TypeScript, HTML, CSS, Tailwind",
	},
	{
		Icon: Briefcase,
		title: "Backend & Databases",
		description: "Django, DRF, PostgreSQL, Prisma, pgvector",
	},
	{
		Icon: Wrench,
		title: "DevOps & Tools",
		description: "Docker, Postman",
	},
];

export const techIcons = [
	{ Icon: SiPython, label: "Python", color: "#3776AB" },
	{ Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
	{ Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
	{ Icon: SiDjango, label: "Django", color: "var(--tech-django)" },
	{ Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
	{ Icon: SiPrisma, label: "Prisma", color: "var(--tech-prisma)" },
	{ Icon: SiReact, label: "React", color: "#61DAFB" },
	{ Icon: SiNextdotjs, label: "Next.js", color: null },
	{ Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
	{ Icon: SiVite, label: "Vite", color: "#646CFF" },
	{ Icon: SiDocker, label: "Docker", color: "#2496ED" },
	{ Icon: SiPostman, label: "Postman", color: "#FF6C37" },
];

export const projects = [
	{
		title: "Job Match Agent",
		tech: "Python · CrewAI",
		description:
			"Multi-agent AI app that evaluates resume-to-job match using local LLM (Ollama) + GitHub analysis",
		image: "/projects/job-agent.png",
		liveUrl: null,
		githubUrl: "https://github.com/olyflower/job-agent",
		commercial: false,
	},
	{
		title: "Adaptive Travel Guide",
		tech: "Django · React",
		description:
			"AI-powered travel recommendation app with personalized suggestions based on user profile, vector search via pgvector",
		image: "/projects/adaptive-travel-guide.webp",
		liveUrl: "https://adaptive-travel-guide.vercel.app",
		githubUrl: "https://github.com/olyflower/adaptive-travel-guide",
		commercial: false,
	},
	{
		title: "Yastreb Team",
		tech: "Next.js",
		description: "Website for a sports club",
		image: "/projects/yastreb-team.webp",
		liveUrl: "https://yastreb-team.vercel.app/en",
		githubUrl: null,
		commercial: true,
	},
	{
		title: "Akkarga",
		tech: "Django · React",
		description: "Commercial business website",
		image: "/projects/akkarga.webp",
		liveUrl: "https://akkarga.com.ua",
		githubUrl: null,
		commercial: true,
	},
	{
		title: "Coffee Recipes",
		tech: "Next.js · Prisma",
		description:
			"Educational app for creating and browsing coffee recipes, with admin editing, S3 image uploads, Google auth, dark/light mode",
		image: "/projects/coffee-recipes.webp",
		liveUrl: "https://coffee-recipes-nextjs.vercel.app",
		githubUrl: "https://github.com/olyflower/coffee-recipes-nextjs",
		commercial: false,
	},
];

export const services = [
	{
		Icon: Globe,
		title: "Frontend Development",
		description:
			"Building responsive, pixel-perfect interfaces with React, Next.js, and TypeScript, styled with Tailwind CSS",
	},
	{
		Icon: Server,
		title: "Backend Development",
		description:
			"Designing and building REST APIs with Django and Django REST Framework, backed by PostgreSQL",
	},
	{
		Icon: Layers,
		title: "Full-Stack Projects",
		description:
			"Delivering complete, end-to-end applications — from database design to deployed frontend, including auth and third-party integrations",
	},
	{
		Icon: Palette,
		title: "UI Implementation",
		description:
			"Building clean, accessible interfaces with attention to detail — from layout to interaction, across all screen sizes",
	},
];
