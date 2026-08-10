import { services } from "@/constants/data";

export default function Services() {
	return (
		<section
			id="services"
			className="mx-auto max-w-7xl px-6 py-16 md:py-24"
		>
			<div className="mx-auto max-w-2xl text-center">
				<span className="text-sm font-medium uppercase tracking-wider text-accent">
					What I offer
				</span>

				<h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-foreground">
					My Services
				</h2>

				<p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
					I design and build full-stack web applications — from
					React/Next.js interfaces to Django REST Framework APIs —
					with clean, maintainable code at the core.
				</p>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
				{services.map(({ Icon, title, description }) => (
					<div
						key={title}
						className="rounded-2xl border border-border p-6 transition hover:border-accent hover:shadow-lg"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
							<Icon size={24} className="text-accent" />
						</div>

						<h3 className="mt-4 font-semibold text-foreground">
							{title}
						</h3>

						<p className="mt-2 text-sm text-muted">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
