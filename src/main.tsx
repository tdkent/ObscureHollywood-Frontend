import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router";
import App from "@/App";
import GlobalErrorBoundary from "@/GlobalError";

const root = document.getElementById("root");

if (!root) {
	throw new Error("Could not find root element");
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60 * 24, // 1d
		},
	},
});

createRoot(root).render(
	<StrictMode>
		<ErrorBoundary
			fallbackRender={({ error, resetErrorBoundary }) => (
				<GlobalErrorBoundary error={error} reset={resetErrorBoundary} />
			)}
		>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</BrowserRouter>
		</ErrorBoundary>
	</StrictMode>,
);
