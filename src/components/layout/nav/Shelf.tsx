import { ChevronRightIcon, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router";
import Logo from "@/components/layout/Logo";
import { navLinks } from "@/lib/navLinks";

interface Props {
	instantClose: boolean;
	setInstantClose: Dispatch<SetStateAction<boolean>>;
	showShelf: boolean;
	setShowShelf: Dispatch<SetStateAction<boolean>>;
}

/** Shelf component for mobile navigation. */
export default function Shelf({
	instantClose,
	setInstantClose,
	showShelf,
	setShowShelf,
}: Props) {
	function handleClick() {
		setShowShelf(false);
		setInstantClose(true);
	}

	return (
		<div
			inert={!showShelf}
			className={`fixed top-0 right-0 bg-white w-full h-dvh z-40 ${instantClose ? "" : "transition-all duration-400"} ${showShelf ? "opacity-100" : "opacity-0"}`}
		>
			<div className="flex justify-between items-center py-4 px-6">
				<Logo />
				<button
					aria-label={`${showShelf ? "Hide" : "Show"} Nav Menu`}
					className="cursor-pointer"
					onClick={handleClick}
					type="button"
				>
					<X className="scale-150 stroke-1" />
				</button>
			</div>
			<div className="w-full h-full flex-1 px-4 pt-16 flex flex-col sm:px-12">
				<nav className="flex-1 min-h-0">
					<ul className="flex flex-col h-full min-h-0 divide-y text-xl pt-8 sm:pt-16">
						{navLinks.map((link) => {
							return (
								<li key={link.label} className="py-4">
									<NavLink
										to={link.href}
										className="w-full"
										onClick={handleClick}
										data-testid={`mobile-${link.testId}`}
										end
									>
										<div className="flex items-center justify-between">
											{link.label}
											<ChevronRightIcon className="size-4" />
										</div>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
}
