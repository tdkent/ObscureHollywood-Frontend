import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout() {
	return (
		<div
			className="h-screen flex flex-col bg-bg text-text font-open-sans"
			id="container"
		>
			<Header />
			<main className="flex-1 lg:flex lg:flex-col lg:items-center">
				<div className="mx-6 my-8">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
}
