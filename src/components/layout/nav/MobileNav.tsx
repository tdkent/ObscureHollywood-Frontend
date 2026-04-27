import { Menu } from "lucide-react";
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
			if (showShelf) {
				container.classList.add("fixed");
				container.classList.add("top-0");
				container.classList.add("left-0");
				container.classList.add("right-0");
			} else {
				container.classList.remove("fixed");
				container.classList.remove("top-0");
				container.classList.remove("left-0");
				container.classList.remove("right-0");
			}
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
				<Menu className="scale-125 stroke-2" />
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
