import Navigation from "@/components/layout/Navigation";
import Search from "@/components/layout/Search";

export default function Header() {
	return (
		<header className="border-b">
			<div className="flex flex-col py-4 px-6 gap-4">
				<div className="flex justify-between items-center">
					<span>Obscure Hollywood</span>
					<Navigation />
				</div>
				<Search />
			</div>
		</header>
	);
}
