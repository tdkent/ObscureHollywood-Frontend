/// <reference types="vite/client" />

import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import NotFound from "@/components/shared/NotFound";
import GlobalErrorBoundary from "@/GlobalError";
import RootLayout from "@/layouts/RootLayout";
import appCss from "../styles/app.css?url";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "icon", type: "image/png", sizes: "16x16", href: "/icon@16.png" },
			{ rel: "icon", type: "image/png", sizes: "32x32", href: "/icon@32.png" },
			{ rel: "icon", type: "image/png", sizes: "64x64", href: "/icon@64.png" },
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/icon@192.png",
			},
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
		],
	}),
	errorComponent: (props) => {
		return (
			<RootDocument>
				<GlobalErrorBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<RootLayout>{children}</RootLayout>
				<ReactQueryDevtools buttonPosition="bottom-left" />
				<Scripts />
			</body>
		</html>
	);
}
