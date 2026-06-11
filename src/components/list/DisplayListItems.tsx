import { useState } from "react";
import ListItem from "@/components/list/ListItem";
import PaginationLinks from "@/components/list/PaginationLinks";
import ThemeToggle from "@/components/list/ThemeToggle";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Entity } from "@/types/ui.interface";

interface Props {
	limitParam: number;
	sortParam: string;
	pageParam: number;
	paginatedData: PaginatedResponse;
	route: Entity;
	searchParam?: string;
	tagsParam?: string[];
}

export default function DisplayListItems({
	limitParam,
	sortParam,
	pageParam,
	paginatedData,
	route,
	searchParam,
	tagsParam,
}: Props) {
	/**
	 * Set list visual theme
	 */
	const [useCardTheme, setUseCardTheme] = useState<boolean>(
		!!localStorage.getItem("useCardTheme"),
	);

	return (
		<div className="flex flex-col gap-4 my-6">
			<ThemeToggle
				useCardTheme={useCardTheme}
				setUseCardTheme={setUseCardTheme}
			/>
			<ul className="flex flex-col sm:my-12">
				{paginatedData.data.map((item) => {
					return <ListItem key={item.id} entity={route} item={item} />;
				})}
			</ul>
			<PaginationLinks
				limit={limitParam}
				orderBy={sortParam}
				page={pageParam}
				searchParam={searchParam}
				tagsParam={tagsParam}
				totalPages={paginatedData.meta.totalPages}
			/>
		</div>
	);
}
