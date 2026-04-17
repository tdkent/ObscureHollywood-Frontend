import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

export function renderWithClient(ui: React.ReactNode, routes: string[]) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: { retry: false },
		},
	});

	return render(
		<QueryClientProvider client={queryClient}>
			<MemoryRouter initialEntries={routes}>{ui}</MemoryRouter>
		</QueryClientProvider>,
	);
}
