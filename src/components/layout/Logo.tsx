import { Link, useLocation } from "react-router";

interface Props {
	isShelf?: boolean;
}

export default function Logo({ isShelf }: Props) {
	const { pathname } = useLocation();
	const isHome = pathname === "/";

	return (
		<div className="font-limelight text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
			<Link to="/">
				<span
					className={`${isHome && !isShelf ? "text-light-text" : "text-secondary-text/50 dark:text-secondary-text"}`}
				>
					Obscure
				</span>{" "}
				<span
					className={`${isHome && !isShelf ? "text-light-text" : "bg-linear-to-r from-gold dark:from-gold-light to-gold-dark bg-clip-text text-transparent"}`}
				>
					Hollywood
				</span>
			</Link>
		</div>
	);
}
