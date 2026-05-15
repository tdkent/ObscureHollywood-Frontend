import { Link } from "react-router";
import type { FilteredDlMetadata } from "@/types/ui.interface";

interface Props {
	metadata: FilteredDlMetadata[];
}

/** Renders <dl> element of key-value pairs. */
export default function DescriptionList({ metadata }: Props) {
	return (
		<dl className="px-6 mt-4">
			{metadata.map(({ title, description }) => {
				return (
					<div key={title}>
						<dt>{title}</dt>
						<DescriptionDetails description={description} />
					</div>
				);
			})}
		</dl>
	);
}

/** Render <dd> element from string or array with optional Link */
function DescriptionDetails({
	description,
}: {
	description: FilteredDlMetadata["description"];
}) {
	const isArray = Array.isArray(description);

	if (!isArray) {
		const { href, label } = description;
		return (
			<dd>
				{href ? (
					<Link className="text-link" to={href}>
						{label}
					</Link>
				) : (
					label
				)}
			</dd>
		);
	}

	return (
		<dd className="flex flex-col gap-1">
			{description.map(({ href, label }) => {
				return href ? (
					<Link key={label} className="text-link" to={href}>
						{label}
					</Link>
				) : (
					label
				);
			})}
		</dd>
	);
}
