import { Link } from "react-router";

export default function NotFoundPage() {
	return (
		<div className="page-margins px-6 text-center flex flex-col items-center gap-6">
			<h1 className="font-limelight">
				<span className="block text-8xl">404</span>
				<span className="block">Page Not Found</span>
			</h1>

			<Link className="text-link w-fit" to="/">
				Go to home page
			</Link>
		</div>
	);
}
