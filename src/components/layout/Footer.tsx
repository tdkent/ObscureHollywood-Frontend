import { Link } from "react-router";
import { navLinks } from "@/lib/navLinks";

export default function Footer() {
	return (
		<footer className="border-t bg-bg-accent text-center pt-6 pb-12 flex flex-col gap-10 text-sm">
			<ul className="flex flex-col gap-4">
				{navLinks.map((link) => {
					return (
						<li key={link.label}>
							<Link to={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
			<span className="">
				© 2026. All rights reserved.{" "}
				<Link className="text-link" to="/disclaimer">
					Privacy & Terms
				</Link>
			</span>
		</footer>
	);
}
