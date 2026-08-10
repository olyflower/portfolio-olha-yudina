import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const contactLinks = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/olha-yudina/",
		Icon: FaLinkedin,
	},
	{
		label: "Telegram",
		href: "https://t.me/Olha_Yudina",
		Icon: FaTelegram,
	},
	{
		label: "GitHub",
		href: "https://github.com/olyflower",
		Icon: FaGithub,
	},
];

export default function Contact() {
	return (
		<section
			id="contact"
			className="mx-auto max-w-7xl px-6 py-16 md:py-24"
		>
			<div className="mx-auto max-w-2xl text-center">
				<span className="text-sm font-medium uppercase tracking-wider text-accent">
					Connect with me
				</span>

				<h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-foreground">
					Get in touch
				</h2>

				<p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
					Ready to build something great together? Feel free to reach
					out through any of the channels below — I&apos;m always
					happy to talk about new opportunities.
				</p>
			</div>

			<div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 md:mt-16 md:max-w-none md:flex md:flex-wrap md:justify-center md:gap-6">
				{contactLinks.map(({ label, href, Icon }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center rounded-2xl border border-border p-4 text-center
						transition hover:border-accent hover:shadow-lg md:w-44 md:p-8"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 md:h-14 md:w-14">
							<Icon size={28} className="text-accent" />
						</div>

						<span className="mt-4 font-medium text-foreground">
							{label}
						</span>
					</a>
				))}
			</div>
		</section>
	);
}
