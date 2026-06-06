import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Disclaimer - Obscure Hollywood" },
			{ name: "description", content: "Privacy and terms" },
		],
	}),
});

function RouteComponent() {
	return <div className="page-margins">Hello "/disclaimer"!</div>;
}
