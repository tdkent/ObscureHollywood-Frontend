import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex-1 lg:flex lg:flex-col lg:items-center">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
