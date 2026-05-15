import { useLocation } from "react-router";

interface Props {
	isShelf?: boolean;
}

export default function Logo({ isShelf }: Props) {
	const { pathname } = useLocation();
	const isHome = pathname === "/";

	return (
		<div className="font-limelight text-2xl sm:text-3xl">
			<span
				className={`${isHome && !isShelf ? "text-text-white" : "text-text-heading/50 dark:text-text-heading"}`}
			>
				Obscure
			</span>{" "}
			<span
				className={`${isHome && !isShelf ? "text-text-white" : "bg-linear-to-r from-gold dark:from-gold-light to-gold-dark bg-clip-text text-transparent"}`}
			>
				Hollywood
			</span>
		</div>
	);
}
