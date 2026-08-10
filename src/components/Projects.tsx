import Image from "next/image";
import { projects } from "@/constants/data";

export default function Projects() {
	return (
		<section
			id="projects"
			className="mx-auto max-w-7xl px-6 py-16 md:py-24"
		>
			<div className="mx-auto max-w-2xl text-center">
				<span className="text-sm font-medium uppercase tracking-wider text-accent">
					My portfolio
				</span>

				<h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-foreground">
					Featured Projects
				</h2>

				<p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
					A mix of personal projects and client work, spanning AI,
					full-stack apps, and production websites.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<div
						key={project.title}
						className="flex h-full flex-col rounded-2xl border border-border p-4 shadow-sm transition
						hover:-translate-y-1 hover:border-accent hover:shadow-lg"
					>
						<div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted-bg">
							<Image
								src={project.image}
								alt={project.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
							/>
						</div>

						<span className="mt-4 text-sm font-medium text-accent">
							{project.tech}
						</span>

						<h3 className="mt-1 text-lg font-semibold text-foreground">
							{project.title}
						</h3>

						<p className="mt-2 text-sm text-muted">
							{project.description}
						</p>

						<div className="mt-auto flex flex-wrap gap-3 pt-4">
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={
										project.liveUrl
											? "rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted-bg"
											: "rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
									}
								>
									Github code
								</a>
							)}

							{project.commercial && !project.githubUrl && (
								<span
									aria-disabled="true"
									className="cursor-not-allowed rounded-full border border-border px-4 py-2 text-sm font-medium text-muted"
								>
									Commercial Project
								</span>
							)}

							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
								>
									View Live
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
