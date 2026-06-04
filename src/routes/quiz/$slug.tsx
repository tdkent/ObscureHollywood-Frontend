import { createFileRoute } from "@tanstack/react-router";
import Quiz from "@/components/article/quiz/Quiz";

export const Route = createFileRoute("/quiz/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="page-margins bg-content">
			<Quiz />
		</div>
	);
}
