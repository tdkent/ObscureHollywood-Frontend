interface Props {
	error: unknown;
	reset: (...args: unknown[]) => void;
}

export default function GlobalErrorBoundary({ reset }: Props) {
	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				<p className="rounded-md w-full p-6 flex flex-col gap-2 text-error sm:p-12">
					Something went wrong while loading this content. Please click the
					Retry button below, or try again later.
				</p>
				<div className="flex items-center gap-4 px-6 sm:px-12">
					<button onClick={reset} type="button" className="btn">
						Retry
					</button>
					<a href="/" className="btn btn-link">
						Go to Home Page
					</a>
				</div>
			</div>
		</div>
	);
}
