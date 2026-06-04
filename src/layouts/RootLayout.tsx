import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div
			className="min-h-screen flex flex-col bg-body text-primary-text font-open-sans"
			id="container"
		>
			<Header />
			<main className="flex-1 flex flex-col items-center">{children}</main>
			<Footer />
		</div>
	);
}
