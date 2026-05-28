import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";

interface Props {
	slug: string;
	userId: string;
}

export default function QuizResults({ slug, userId }: Props) {
	useQuery({
		queryKey: [userId, slug],
		queryFn: () => httpRequest(`/users/${userId}/quiz-results/${slug}`),
	});

	return <div className="">hello world</div>;
}
