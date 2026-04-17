import { TriangleAlert } from "lucide-react";

interface Props {
	error: unknown;
}

export default function DisplayError({ error }: Props) {
	console.error(error);

	let errMsg: string = "";
	if (error instanceof Error) {
		if (error.message === "Failed to fetch") {
			errMsg =
				"Could not establish a connection with the server. Please try again later.";
		} else errMsg = error.message;
	}

	return (
		<div className="mx-auto">
			<div className="border rounded-md border-black/10 w-full max-w-sm p-4 flex flex-col gap-2">
				<div className="text-destructive flex items-center gap-2">
					<TriangleAlert />
					Something went wrong!
				</div>
				<div>{errMsg || "An unknown error occurred"}</div>
			</div>
		</div>
	);
}
