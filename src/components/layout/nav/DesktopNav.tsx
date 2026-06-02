import { Link, useLocation } from "@tanstack/react-router";
import { navLinks } from "@/lib/navLinks";

/** Render list of navigation links. */
export default function DesktopNav() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	return (
		<nav className="max-lg:hidden">
			<ul
				className={`flex items-center gap-8 lg:gap-10 xl:gap-12 ${isHome ? "text-light-text" : ""}`}
			>
				{navLinks.map((link) => {
					return (
						<li key={link.label}>
							<Link
								to={link.href}
								data-testid={`${link.testId}`}
								className={`text-lg font-bodini-moda xl:text-xl ${isHome ? "text-shadow-[1px_1px_0_rgb(0,0,0)]" : ""}`}
							>
								{link.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
