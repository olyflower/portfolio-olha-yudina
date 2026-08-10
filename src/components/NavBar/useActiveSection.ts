"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const sections = ids
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: "-45% 0px -50% 0px", threshold: 0 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, [ids]);

	return activeId;
}
