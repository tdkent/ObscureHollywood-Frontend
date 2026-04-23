export default function Search() {
	function handleSearch(formData: FormData) {
		const searchString = formData.get("search");
		console.log(searchString);
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
