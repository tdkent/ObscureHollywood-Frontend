import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import NotFound from "@/components/shared/NotFound";
import GlobalErrorBoundary from "@/GlobalError";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 60 * 24, // 1d
			},
		},
	});

	const router = createRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: "intent", //? routes will be preloaded by default when the user hovers over a link
		scrollRestoration: true,
		defaultErrorComponent: ({ error, reset }) => (
			<GlobalErrorBoundary error={error} reset={reset} />
		),
		defaultNotFoundComponent: () => <NotFound />,
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
