import { Menu, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Shelf from "@/components/layout/nav/Shelf";

/** Render trigger button and drawer with nav. */
export default function MobileNav() {
	const [showShelf, setShowShelf] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [container, setContainer] = useState<Element | null>(null);
	const [instantClose, setInstantClose] = useState(false);

	// Create portal on mount
	useEffect(() => {
		const rootContainer = document.querySelector("#container");
		if (rootContainer) {
			setMounted(true);
			setContainer(rootContainer);
		}
	}, []);

	// Body scroll lock
	useEffect(() => {
		if (container) {
			if (showShelf) container.classList.add("fixed");
			else container.classList.remove("fixed");
		}
	}, [container, showShelf]);

	function handleClick() {
		setShowShelf((prev) => !prev);
		setInstantClose(false);
	}

	return (
		<>
			<button
				aria-label={`${showShelf ? "Hide" : "Show"} Nav Menu`}
				className="lg:hidden cursor-pointer"
				onClick={handleClick}
				type="button"
			>
				{/* <Minus
					className={`absolute stroke-2 ${instantClose ? "" : "transition-all duration-400"} ${showShelf ? "opacity-100 rotate-45" : "opacity-0 rotate-0"}`}
				/>
				<Minus
					className={`absolute stroke-2 ${instantClose ? "" : "transition-all duration-400"} ${showShelf ? "opacity-100 -rotate-45" : "opacity-0 rotate-0"}`}
				/> */}
				{/* <Menu
					className={`absolute stroke-2 ${instantClose ? "" : "transition-all duration-400"} ${showShelf ? "opacity-0" : "opacity-100"}`}
				/> */}
				<Menu />
			</button>
			{mounted && container
				? createPortal(
						<Shelf
							instantClose={instantClose}
							setInstantClose={setInstantClose}
							showShelf={showShelf}
							setShowShelf={setShowShelf}
						/>,
						container,
					)
				: null}
		</>
	);
}
