import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	createMemoryHistory,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";

import { routeTree } from "@/routeTree.gen";

export async function renderWithRouter(initialPath = "/") {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				gcTime: 0,
			},
		},
	});

	const history = createMemoryHistory({
		initialEntries: [initialPath],
	});

	const router = createRouter({
		routeTree,
		history,
		context: {
			queryClient,
		},
	});

	const renderResult = render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>,
	);

	// Ensure initial route has finished loading
	await router.load();

	return {
		...renderResult,
		router,
		queryClient,
	};
}
