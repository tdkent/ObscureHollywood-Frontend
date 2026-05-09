import { Link } from "react-router";
import type { DlMetadata } from "@/types/ui.interface";

interface Props {
	metadata: DlMetadata[];
}

/** Renders <dl> element of key-value pairs. */
export default function DescriptionList({ metadata }: Props) {
	return (
		<dl>
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
	description: DlMetadata["description"];
}) {
	const isArray = Array.isArray(description);

	if (!isArray) {
		const { href, label } = description;
		return <dd>{href ? <Link to={href}>{label}</Link> : label}</dd>;
	}

	return (
		<dd>
			{description.map(({ href, label }) => {
				return href ? (
					<Link key={label} to={href}>
						{label}
					</Link>
				) : (
					label
				);
			})}
		</dd>
	);
}
