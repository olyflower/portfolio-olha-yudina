import { featureCards, techIcons } from "@/constants/data";

export default function About() {
	return (
		<section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
			<div className="text-center">
				<span className="text-sm font-medium uppercase tracking-wider text-accent">
					Get to know me
				</span>

				<h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-foreground">
					About Me
				</h2>

				<p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
					Here&apos;s a closer look at my toolkit and what I&apos;ve
					built with it. This is a mix of what I studied and what I
					picked up building real projects along the way — and
					I&apos;m always adding to it, including more of the AI/ML
					space.
				</p>
			</div>

			<div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
				<div className="flex flex-col gap-4">
					{featureCards.map(({ Icon, title, description }) => (
						<div
							key={title}
							className="rounded-2xl border border-border p-6 shadow-sm transition hover:border-accent hover:bg-muted-bg hover:shadow-lg"
						>
							<Icon size={28} className="text-accent" />

							<h3 className="mt-4 font-semibold text-foreground lg:text-lg">
								{title}
							</h3>

							<p className="mt-3 text-base text-muted lg:text-lg">
								{description}
							</p>
						</div>
					))}
				</div>

				<div>
					<span className="text-lg font-medium text-foreground">
						Tools I use:
					</span>

					{/* Mobile / tablet */}
					<div className="mt-4 flex flex-wrap gap-4 lg:hidden">
						{techIcons.map(({ Icon, label, color }) => (
							<div
								key={label}
								title={label}
								className="flex h-16 w-16 items-center justify-center rounded-xl border border-border shadow-sm
												   transition hover:border-accent hover:shadow-md"
							>
								<Icon
									size={28}
									className={
										color ? undefined : "text-foreground"
									}
									style={color ? { color } : undefined}
								/>
							</div>
						))}
					</div>

					{/* Desktop: orbit animation */}
					<div
						className="orbit-group relative mx-auto mt-8 hidden h-104 w-104 [--orbit-radius:175px]
					lg:block xl:h-120 xl:w-120 xl:[--orbit-radius:190px]"
					>
						<div className="orbit-ring absolute inset-0">
							{techIcons.map(({ Icon, label, color }, index) => {
								const angle = (360 / techIcons.length) * index;

								return (
									<div
										key={label}
										title={label}
										className="absolute left-1/2 top-1/2"
										style={{
											transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--orbit-radius)) 
											rotate(${-angle}deg)`,
										}}
									>
										<div
											className="orbit-icon flex h-16 w-16 items-center justify-center rounded-xl border
										border-border bg-background transition hover:border-accent"
										>
											<Icon
												size={30}
												className={
													color
														? undefined
														: "text-foreground"
												}
												style={
													color
														? { color }
														: undefined
												}
											/>
										</div>
									</div>
								);
							})}
						</div>

						<div
							className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center 
						justify-center rounded-full bg-accent/10 text-sm font-medium text-accent"
						>
							Tools
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
