import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";

export default function FilmTags() {
	const { data, error, isPending } = useQuery({
		queryKey: ["tags"],
		queryFn: () => httpRequest("/tags"),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	console.log(data);

	return <div></div>;
}
