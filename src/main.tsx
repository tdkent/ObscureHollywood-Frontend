import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary fallback={<div>An error occurred!</div>}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundary>
	</StrictMode>,
);
