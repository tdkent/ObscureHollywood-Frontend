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

createRoot(root).render(
	<StrictMode>
		<ErrorBoundary
			fallbackRender={({ error, resetErrorBoundary }) => (
				<GlobalErrorBoundary error={error} reset={resetErrorBoundary} />
			)}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundary>
	</StrictMode>,
);
