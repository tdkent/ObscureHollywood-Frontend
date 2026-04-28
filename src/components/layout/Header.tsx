import Navigation from "@/components/layout/Navigation";
import Search from "@/components/layout/Search";

export default function Header() {
	return (
		<header className="border-b">
			<div className="flex flex-col py-4 px-6 gap-4">
				<div className="flex justify-between items-center">
					<div className="font-limelight text-2xl">
						<span className="text-text-heading/50 dark:text-text-heading">
							Obscure
						</span>{" "}
						<span className="bg-linear-to-r from-gold dark:from-gold-light to-gold-dark bg-clip-text text-transparent">
							Hollywood
						</span>
					</div>
					<Navigation />
				</div>
				<Search />
			</div>
		</header>
	);
}
