import { useSearchParams } from "react-router";
import Paginated from "@/components/list/Paginated";

export default function SearchPage() {
	const [searchParams] = useSearchParams();

	const searchParam = searchParams.get("searchString");

	return (
		<div>
			<h1 className="font-light text-2xl">Search Results</h1>
			<p className="my-4 text-lg">"{searchParam}"</p>
			<Paginated />
		</div>
	);
}
