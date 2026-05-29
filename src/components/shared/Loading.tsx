type Props =
	| {
			hasDescList?: never;
			isFullArticle?: never;
			variant: "filter" | "homeSectionItems" | "list" | "results" | "user";
	  }
	| {
			hasDescList?: boolean;
			isFullArticle?: boolean;
			variant: "article";
	  };

export default function Loading({
	hasDescList,
	isFullArticle,
	variant,
}: Props) {
	if (variant === "list") {
		const list = Array.from({ length: 10 }, (_, idx) => idx);
		return (
			<div className="flex flex-col gap-10 my-6 px-6 sm:px-12 sm:my-10 sm:gap-14">
				<div className="flex flex-col gap-4">
					<div className="skeleton h-4 w-40 rounded-sm dark:bg-content-alt sm:h-6"></div>
					<div className="gap-4 flex flex-col lg:flex-row lg:gap-10">
						<div className="skeleton h-10 w-full rounded-sm dark:bg-content-alt sm:h-12 md:w-80"></div>
						<div className="skeleton h-10 w-full rounded-sm dark:bg-content-alt sm:h-12 md:w-80"></div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					{list.map((item) => {
						return (
							<div key={item} className="flex justify-between gap-4">
								<div className="skeleton rounded-none shrink-0 dark:bg-content-alt size-16 sm:size-20 md:size-22 lg:size-36"></div>
								<div className="flex flex-col gap-2 w-full sm:gap-4">
									<div className="skeleton h-4 w-3/4 rounded-sm dark:bg-content-alt sm:h-6"></div>
									<div className="skeleton h-3 w-1/2 rounded-sm dark:bg-content-alt sm:h-5"></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	if (variant === "article") {
		const list = Array.from({ length: 16 }, (_, idx) => idx);
		return (
			<div className="flex flex-col gap-10 my-4">
				<div className="flex flex-col gap-4 px-6 sm:px-12">
					<div className="skeleton h-12 w-full dark:bg-content-alt sm:w-3/4"></div>
					<div className="skeleton h-8 w-3/4 dark:bg-content-alt sm:w-1/2"></div>
					{isFullArticle && (
						<div className="skeleton aspect-7/5 w-full rounded-none dark:bg-content-alt lg:w-3/4"></div>
					)}
				</div>
				{isFullArticle && (
					<>
						{hasDescList && (
							<div className="flex flex-col gap-6 px-6 sm:px-12">
								<div className="flex flex-col gap-2 sm:flex-row sm:gap-32">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
								</div>
								<div className="flex flex-col gap-2 sm:flex-row sm:gap-32">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
								</div>
								<div className="flex flex-col gap-2 sm:flex-row sm:gap-32">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
								</div>
								<div className="flex flex-col gap-2 sm:flex-row sm:gap-32">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
								</div>
								<div className="flex flex-col gap-2 sm:flex-row sm:gap-32">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
								</div>
							</div>
						)}
						<div className="flex flex-col gap-4 px-6 w-full sm:px-12 lg:w-3/4">
							<div className="skeleton h-8 w-60 rounded-sm dark:bg-content-alt"></div>
							{list.map((item) => {
								return (
									<div
										key={item}
										className="skeleton h-4 w-full rounded-sm dark:bg-content-alt"
									></div>
								);
							})}
						</div>
					</>
				)}
			</div>
		);
	}

	if (variant === "homeSectionItems") {
		return (
			<div className="flex flex-col gap-4 px-4 my-4 lg:flex-row">
				<div className="h-24 w-full">
					<span
						className={`loading loading-spinner loading-xl text-secondary-text`}
					></span>
				</div>
				<div className="h-24 w-full">
					<span
						className={`loading loading-spinner loading-xl text-secondary-text`}
					></span>
				</div>
				<div className="h-24 w-full">
					<span
						className={`loading loading-spinner loading-xl text-secondary-text`}
					></span>
				</div>
			</div>
		);
	}

	if (variant === "filter") {
		return (
			<div className="flex items-center gap-2 text-secondary-text">
				<span className="loading loading-spinner loading-sm"></span>
				Loading filters
			</div>
		);
	}

	if (variant === "results") {
		return (
			<div className="flex flex-col gap-4">
				<div className="skeleton h-4 w-60 rounded-sm dark:bg-content-alt"></div>
				<div className="skeleton h-4 w-40 rounded-sm dark:bg-content-alt"></div>
				<div className="skeleton h-4 w-40 rounded-sm dark:bg-content-alt"></div>
			</div>
		);
	}

	if (variant === "user") {
		return (
			<div className="flex flex-col gap-6 px-6 sm:px-12">
				<div className="skeleton h-6 w-48 rounded-sm lg:h-8 lg:w-52 dark:bg-content-alt"></div>
				<div className="flex flex-col gap-2">
					<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
					<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
					<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
					<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="skeleton h-4 w-20 rounded-sm dark:bg-content-alt"></div>
					<div className="skeleton h-5 w-40 rounded-sm dark:bg-content-alt"></div>
				</div>
				<div className="skeleton h-6 w-48 rounded-sm mt-4 lg:h-8 lg:w-52 dark:bg-content-alt"></div>
				<div className="flex flex-col gap-4">
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
					<div className="skeleton h-10 w-full rounded-sm lg:w-200 dark:bg-content-alt"></div>
				</div>
			</div>
		);
	}

	return <div>Loading...</div>;
}
