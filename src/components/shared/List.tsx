import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";

export default function List() {
	const { data, error, isPending } = useQuery({
		queryKey: ["films"],
		queryFn: () => httpRequest("/films"),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return "List of Items";
}
