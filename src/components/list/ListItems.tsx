import ListItem from "@/components/list/ListItem";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Entity } from "@/types/ui.interface";

interface Props {
	paginatedData: PaginatedResponse;
	route: Entity;
	useCardTheme: boolean;
}

export default function ListItems({
	paginatedData,
	route,
	useCardTheme,
}: Props) {
	return (
		<ul
			className={`flex flex-col ${useCardTheme ? "border-y sm:flex-row sm:flex-wrap sm:gap-0 sm:px-12" : ""}`}
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
	);
}
