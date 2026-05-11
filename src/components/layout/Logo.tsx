import { useLocation } from "react-router";

export default function Logo() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";

	return (
		<div className="font-limelight text-2xl">
			<span
				className={`${isHome ? "text-white" : "text-text-heading/50 dark:text-text-heading"}`}
			>
				Obscure
			</span>{" "}
			<span
				className={`${isHome ? "text-white" : "bg-linear-to-r from-gold dark:from-gold-light to-gold-dark bg-clip-text text-transparent"}`}
			>
				Hollywood
			</span>
		</div>
	);
}
