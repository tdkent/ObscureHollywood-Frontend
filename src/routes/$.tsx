import { createFileRoute } from "@tanstack/react-router";
import NotFound from "@/components/shared/NotFound";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Not Found - Obscure Hollywood",
			},
			{
				name: "description",
				content: "Page not found",
			},
		],
	}),
});

function RouteComponent() {
	return <NotFound />;
}
