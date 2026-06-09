import { createFileRoute } from "@tanstack/react-router";
import NotFound from "@/components/shared/NotFound";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Page Not Found - Obscure Hollywood",
			},
			{
				name: "description",
				content: "The page you requested could not be found.",
			},
		],
	}),
});

function RouteComponent() {
	return <NotFound />;
}
