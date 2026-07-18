import { Link } from "@tanstack/react-router";
import { dlText, type FilteredDlMetadata } from "@/types/ui.interface";

interface Props {
	metadata: FilteredDlMetadata[];
}

/** Renders <dl> element of key-value pairs. */
export default function DescriptionList({ metadata }: Props) {
	return (
		<dl className="p-6 mt-4 sm:px-12">
			{metadata.map(({ title, description }) => {
				return (
					<div key={title} className="sm:flex-row sm:gap-4">
						<dt className="sm:mt-1 sm:w-1/3">{title}</dt>
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
		const isUnknown = typeof label === "string" && label === dlText.UNKNOWN;
		return (
			<dd className="sm:w-2/3">
				{href ? (
					<Link className="content-link" to={href}>
						{label}
					</Link>
				) : (
					<span className={`${isUnknown && `italic font-light`}`}>{label}</span>
				)}
			</dd>
		);
	}

	return (
		<dd className="flex flex-col gap-1 sm:w-2/3">
			{description.map(({ href, label }) => {
				return href ? (
					<Link key={label} className="content-link" to={href}>
						{label}
					</Link>
				) : (
					<span key={label}>{label}</span>
				);
			})}
		</dd>
	);
}
