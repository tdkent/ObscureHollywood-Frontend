interface Props {
	error: unknown;
	reset: (...args: unknown[]) => void;
}

export default function GlobalErrorBoundary({ reset }: Props) {
	return (
		<div
			className="min-h-screen flex flex-col bg-body text-primary-text font-open-sans"
			id="container"
		>
			<header className="absolute top-0 right-0 left-0 h-24 z-10 sm:h-28 xl:h-32 bg-content border-b">
				<div className="flex flex-col justify-center px-6 gap-2 h-full sm:px-12 lg:flex-col-reverse lg:gap-3 xl:px-24">
					<div className="flex justify-between items-center">
						<div className="font-limelight text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
							<span className={`text-text-heading/50 dark:text-text-heading`}>
								Obscure
							</span>{" "}
							<span
								className={`bg-linear-to-r from-gold dark:from-gold-light to-gold-dark bg-clip-text text-transparent`}
							>
								Hollywood
							</span>
						</div>
					</div>
				</div>
			</header>
			<main className="flex-1 flex flex-col items-center">
				<div className="bg-content pt-24 pb-8 w-full max-w-292.5 flex-1 sm:pt-28 sm:pb-12 lg:border-x xl:pt-32">
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
			</main>
			<footer className="border-t bg-footer text-center font-thin pt-6 pb-12 flex flex-col gap-10 sm:pt-10 sm:pb-16">
				<span className="text-sm">© 2026. All rights reserved.</span>
			</footer>
		</div>
	);
}
