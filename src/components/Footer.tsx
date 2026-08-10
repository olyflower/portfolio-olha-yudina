export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-background">
			<div className="mx-auto max-w-7xl px-6 py-8 text-center">
				<p className="text-sm text-foreground/70">
					© {year} Olha Yudina. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
