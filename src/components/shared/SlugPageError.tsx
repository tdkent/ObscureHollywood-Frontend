import DisplayError from "@/components/shared/DisplayError";
import NotFound from "@/components/shared/NotFound";

interface Props {
	error: unknown;
}

export default function ({ error }: Props) {
	if (error instanceof Error && error.message === "Resource not found") {
		return <NotFound />;
	}
	return (
		<div className="page-margins bg-content">
			<DisplayError />
		</div>
	);
}
