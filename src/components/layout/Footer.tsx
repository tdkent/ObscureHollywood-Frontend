import { Link } from "@tanstack/react-router";
import { navLinks } from "@/lib/navLinks";

export default function Footer() {
	return (
		<footer className="border-t bg-footer text-center font-thin pt-6 pb-12 flex flex-col gap-10 sm:pt-10 sm:pb-16">
			<ul className="flex flex-col gap-4 text-sm sm:text-base">
				{navLinks.map((link) => {
					return (
						<li key={link.label}>
							<Link to={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
			<span className="text-sm">
				© 2026. All rights reserved.{" "}
				<Link to="/disclaimer">Privacy & Terms</Link>
			</span>
		</footer>
	);
}
