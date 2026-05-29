import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";

interface Props {
	userId: string;
}

export default function UserQuizzes({ userId }: Props) {
	const { data, error, isPending } = useQuery({
		queryKey: ["user"],
		queryFn: () => httpRequest(`/users/${userId}`),
	});

	if (isPending) return "loading...";
	if (error) return <DisplayError />;

	return <div></div>;
}
