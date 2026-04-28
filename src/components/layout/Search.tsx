import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router";

export default function Search() {
	const navigate = useNavigate();

	function handleSearch(formData: FormData) {
		const searchString = formData.get("search");

		//! Validate

		navigate({
			pathname: "/articles",
			search: `?searchString=${searchString}`,
		});
	}

	return (
		<search>
			<form
				action={handleSearch}
				className="border rounded-lg flex h-12 overflow-hidden"
				id="search"
			>
				<input
					className="grow h-full outline-none px-3"
					type="search"
					name="search"
				/>
				<button
					className="h-full flex items-center border-l bg-bg-accent px-3"
					type="submit"
				>
					<span className="sr-only">Search</span>
					<SearchIcon className="stroke-1" />
				</button>
			</form>
		</search>
	);
}
