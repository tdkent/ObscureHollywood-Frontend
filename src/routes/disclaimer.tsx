import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="page-margins">Hello "/disclaimer"!</div>;
}
