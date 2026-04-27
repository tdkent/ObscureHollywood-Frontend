import { NavLink } from "react-router";
import { navLinks } from "@/lib/navLinks";

/** Render list of navigation links. */
export default function DesktopNav() {
	return (
		<nav className="max-lg:hidden font-sans">
			<ul className="flex items-center gap-8 lg:gap-12 xl:gap-20">
				{navLinks.map((link) => {
					return (
						<li key={link.label}>
							<NavLink
								to={link.href}
								data-testid={`${link.testId}-link`}
								className="text-base xl:text-lg"
							>
								{link.label}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
