import Nav from "@/components/layout/Nav";
import Search from "@/components/layout/Search";

export default function Header() {
	return (
		<header className="flex justify-between">
			<div>
				<span>Obscure Hollywood</span>
				<Nav />
			</div>
			<Search />
		</header>
	);
}
