import { useLocation } from "react-router";
import Logo from "@/components/layout/Logo";
import Navigation from "@/components/layout/Navigation";
import Search from "@/components/layout/Search";

export default function Header() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	return (
		<header
			className={`absolute top-0 right-0 left-0 h-30 z-10 sm:h-40 lg:h-30 xl:h-32 ${isHome ? "bg-transparent" : "bg-white border-b"}`}
		>
			<div className="flex flex-col justify-center px-6 gap-4 h-full sm:gap-6 sm:px-12 lg:flex-col-reverse lg:gap-3 xl:px-24">
				<div className="flex justify-between items-center">
					<Logo />
					<Navigation />
				</div>
				<Search />
			</div>
		</header>
	);
}
