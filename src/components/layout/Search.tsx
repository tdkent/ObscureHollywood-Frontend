import { useLocation, useNavigate } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";

interface Props {
	isShelf?: boolean;
}

export default function Search({ isShelf }: Props) {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const isHome = pathname === "/";

	function handleSearch(formData: FormData) {
		const searchString = formData.get("search")?.toString().trim();

		navigate({
			to: "/search",
			search: { q: searchString },
		});
	}

	return (
		<div className="w-full flex justify-end">
			{/** biome-ignore lint/a11y/useSemanticElements: search element is not full supported in React/JSDOM */}
			<form
				action={handleSearch}
				className={`border rounded-lg flex h-10 overflow-hidden w-full sm:h-11 lg:w-105 xl:w-120 ${isHome && !isShelf ? "border-dark-border" : ""}`}
				id="search"
				role="search"
			>
				<label htmlFor="search-input" className="sr-only">
					Search
				</label>
				<input
					className={`grow h-full outline-none px-3 sm:font-normal lg:font-light lg:text-base ${isHome && !isShelf ? "bg-black/30 text-light-text" : ""}`}
					id="search-input"
					name="search"
					type="search"
				/>
				<button
					className={`h-full flex items-center border-l  px-3 ${isHome && !isShelf ? "bg-black/10 border-dark-border" : ""}`}
					type="submit"
				>
					<span className="sr-only">Search</span>
					<SearchIcon
						className={`stroke-1 size-6 lg:size-5 ${isHome && !isShelf ? "text-light-text" : "dark:text-light-text"}`}
					/>
				</button>
			</form>
		</div>
	);
}
