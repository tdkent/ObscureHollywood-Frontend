import { useState } from "react";
import ListItem from "@/components/list/ListItem";
import ThemeToggle from "@/components/list/ThemeToggle";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Entity } from "@/types/ui.interface";

interface Props {
	paginatedData: PaginatedResponse;
	route: Entity;
}

export default function DisplayListItems({ paginatedData, route }: Props) {
	/**
	 * Set list visual theme
	 */
	const [useCardTheme, setUseCardTheme] = useState<boolean>(
		!!localStorage.getItem("useCardTheme"),
	);

	return (
		<>
			<ThemeToggle
				useCardTheme={useCardTheme}
				setUseCardTheme={setUseCardTheme}
			/>
			<ul
				className={`flex flex-col ${useCardTheme ? "gap-6 sm:flex-row sm:flex-wrap sm:gap-0 sm:px-12 sm:my-2" : "sm:my-12"}`}
			>
				{paginatedData.data.map((item) => {
					return (
						<ListItem
							key={item.id}
							entity={route}
							item={item}
							useCardTheme={useCardTheme}
						/>
					);
				})}
			</ul>
		</>
	);
}
