import { Link } from "react-router";
import { navLinks } from "@/lib/navLinks";

export default function Footer() {
	return (
		<footer>
			<ul>
				{navLinks.map((link) => {
					return (
						<li key={link.label}>
							<Link to={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
			<span>
				© 2026. All rights reserved.{" "}
				<Link to="/disclaimer">Privacy & Terms</Link>
			</span>
		</footer>
	);
}
