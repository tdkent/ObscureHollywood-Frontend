import { Link } from "react-router";
import Thumbnail from "@/components/list/Thumbnail";
import type { PartialListItem } from "@/types/paginated-response.interface";

interface Props {
	item: PartialListItem;
}

export default function ListItem({ item }: Props) {
	return (
		<li className="min-h-20 py-2">
			<Link to={item.slug}>
				<div className="flex justify-between">
					<div className="flex flex-col w-4/5">
						<h2 className="text-base font-bold">{item.name}</h2>
						<h3>Subtext goes here</h3>
					</div>
					<Thumbnail />
				</div>
			</Link>
		</li>
	);
}
