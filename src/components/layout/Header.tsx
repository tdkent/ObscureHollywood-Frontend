import Logo from "@/components/layout/Logo";
import Navigation from "@/components/layout/Navigation";
import Search from "@/components/layout/Search";

export default function Header() {
	return (
		<header className="absolute top-0 right-0 left-0 z-40 border-b h-30">
			<div className="flex flex-col justify-center px-6 gap-4 h-full">
				<div className="flex justify-between items-center">
					<Logo />
					<Navigation />
				</div>
				<Search />
			</div>
		</header>
	);
}
