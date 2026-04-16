import { NavLink } from "react-router";
import { navLinks } from "@/lib/navLinks";

export default function Nav() {
	return (
		<nav>
			<ul className="flex gap-4">
				{navLinks.map((link) => {
					return (
						<li key={link.testId}>
							<NavLink data-testid={link.testId} to={link.href}>
								{link.label}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
