import { Search as SearchIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

export default function Search() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const isHome = pathname === "/";

	function handleSearch(formData: FormData) {
		const searchString = formData.get("search");

		//! Validate

		navigate({
			pathname: "/search",
			search: `?q=${searchString}`,
		});
	}

	return (
		<search>
			<form
				action={handleSearch}
				className="border border-dark-border rounded-lg flex h-12 overflow-hidden"
				id="search"
			>
				<input
					className={`grow h-full outline-none px-3 text-xl ${isHome ? "bg-black/30" : "bg-bg-accent"}`}
					type="search"
					name="search"
				/>
				<button
					className={`h-full flex items-center border-l border-dark-border px-3 ${isHome ? "bg-black/10" : "bg-bg-accent"}`}
					type="submit"
				>
					<span className="sr-only">Search</span>
					<SearchIcon className="stroke-1 size-6 text-text-white" />
				</button>
			</form>
		</search>
	);
}
