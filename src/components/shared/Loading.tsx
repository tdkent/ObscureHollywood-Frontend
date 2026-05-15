type Props =
	| {
			hasDescList?: never;
			limit: number;
			isFullArticle?: never;
			variant: "list";
	  }
	| {
			hasDescList?: boolean;
			limit?: never;
			isFullArticle?: boolean;
			variant: "article";
	  }
	| {
			hasDescList?: never;
			limit?: never;
			isFullArticle?: never;
			variant: "homeSectionItems";
	  }
	| {
			hasDescList?: never;
			limit?: never;
			isFullArticle?: never;
			variant: "filter";
	  };

export default function Loading({
	hasDescList,
	isFullArticle,
	limit,
	variant,
}: Props) {
	if (variant === "list") {
		const list = Array.from({ length: limit ?? 10 }, (_, idx) => idx);
		return (
			<div className="flex flex-col gap-10 my-6 px-6">
				<div className="flex flex-col gap-4">
					<div className="skeleton h-4 w-3/5 rounded-sm dark:bg-bg-accent"></div>
					<div className="skeleton h-10 w-full dark:bg-bg-accent"></div>
					<div className="skeleton h-10 w-full dark:bg-bg-accent"></div>
				</div>
				<div className="flex flex-col gap-4">
					{list.map((item) => {
						return (
							<div key={item} className="flex justify-between gap-10">
								<div className="flex flex-col gap-2 w-full">
									<div className="skeleton h-4 w-full rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-3 w-1/2 rounded-sm dark:bg-bg-accent"></div>
								</div>
								<div className="skeleton h-14 w-14 shrink-0 rounded-full dark:bg-bg-accent"></div>
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
				<div className="flex flex-col gap-4 px-6">
					<div className="skeleton h-12 w-full dark:bg-bg-accent"></div>
					<div className="skeleton h-8 w-3/4 dark:bg-bg-accent"></div>
				</div>
				{isFullArticle && (
					<div className="skeleton aspect-7/5 w-full rounded-none dark:bg-bg-accent"></div>
				)}
				{isFullArticle && (
					<>
						{hasDescList && (
							<div className="flex flex-col gap-6 px-6">
								<div className="flex flex-col gap-2">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="skeleton h-4 w-20 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
									<div className="skeleton h-5 w-40 rounded-sm dark:bg-bg-accent"></div>
								</div>
							</div>
						)}
						<div className="flex flex-col gap-4 px-6">
							<div className="skeleton h-8 w-60 rounded-sm dark:bg-bg-accent"></div>
							{list.map((item) => {
								return (
									<div
										key={item}
										className="skeleton h-4 w-full rounded-sm dark:bg-bg-accent"
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
			<div className="flex flex-col gap-4 px-4 my-4">
				<div className="h-24 w-full">
					<span
						className={`loading loading-spinner loading-xl text-text-heading`}
					></span>
				</div>
				<div className="h-24 w-full">
					<span
						className={`loading loading-spinner loading-xl text-text-heading`}
					></span>
				</div>
				<div className="h-24 w-full">
					<span
						className={`loading loading-spinner loading-xl text-text-heading`}
					></span>
				</div>
			</div>
		);
	}

	if (variant === "filter") {
		return (
			<div className="flex items-center justify-center gap-2 text-text-heading">
				<span className="loading loading-spinner loading-sm"></span>
				Loading filters
			</div>
		);
	}

	return <div>Loading...</div>;
}
