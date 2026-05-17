import { Search as SearchIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

interface Props {
	isShelf?: boolean;
}

export default function Search({ isShelf }: Props) {
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
		<search className="lg:flex lg:justify-end">
			<form
				action={handleSearch}
				className={`border rounded-lg flex h-12 overflow-hidden sm:h-14 lg:w-2/5 lg:h-10 xl:h-12 ${isHome && !isShelf ? "border-dark-border" : ""}`}
				id="search"
			>
				<input
					className={`grow h-full outline-none px-3 text-xl sm:font-normal lg:font-light lg:text-base ${isHome && !isShelf ? "bg-black/30" : ""}`}
					type="search"
					name="search"
				/>
				<button
					className={`h-full flex items-center border-l  px-3 ${isHome && !isShelf ? "bg-black/10 border-dark-border" : ""}`}
					type="submit"
				>
					<span className="sr-only">Search</span>
					<SearchIcon
						className={`stroke-1 size-6 lg:size-5 ${isHome && !isShelf ? "text-text-white" : "dark:text-text-white"}`}
					/>
				</button>
			</form>
		</search>
	);
}
