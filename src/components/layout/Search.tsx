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
			<form action={handleSearch} className="border" id="search">
				<input type="search" name="search" />
				<button type="submit">Search</button>
			</form>
		</search>
	);
}
