import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router";
import App from "@/App";
import GlobalErrorBoundary from "@/GlobalError";

createRoot(document.getElementById("root")!).render(
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
