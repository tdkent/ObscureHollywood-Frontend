import DisplayError from "@/components/shared/DisplayError";

interface Props {
	error: unknown;
	reset: (...args: unknown[]) => void;
}

export default function GlobalErrorBoundary({ error, reset }: Props) {
	return (
		<div className="m-4">
			<h1>Obscure Hollywood</h1>
			<div className="w-full max-w-sm my-4 flex flex-col gap-8">
				<DisplayError error={error} />
				<div className="flex flex-col gap-4">
					<p className="text-sm">
						Please click the Retry button below, or try again later.
					</p>
					<button onClick={reset} type="button">
						Retry
					</button>
				</div>
			</div>
		</div>
	);
}
