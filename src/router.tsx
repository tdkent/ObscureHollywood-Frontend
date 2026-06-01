import { createRouter } from "@tanstack/react-router";
import GlobalErrorBoundary from "@/GlobalError";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultErrorComponent: ({ error, reset }) => (
			<GlobalErrorBoundary error={error} reset={reset} />
		),
	});

	return router;
}
