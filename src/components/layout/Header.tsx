import Nav from "@/components/layout/Nav";

export default function Header() {
	return (
		<header className="flex justify-between">
			<span>Obscure Hollywood</span>
			<Nav />
		</header>
	);
}
