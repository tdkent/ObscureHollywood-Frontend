type Props =
	| {
			limit: number;
			variant: "list";
	  }
	| {
			limit?: never;
			variant: "article";
	  };

export default function Loading({ limit, variant }: Props) {
	if (variant === "list") {
		const list = Array.from({ length: limit }, (_, idx) => idx);

		return (
			<div className="flex flex-col gap-10 my-6 px-6">
				<div className="flex flex-col gap-4">
					<div className="skeleton h-4 w-3/5 rounded-sm dark:bg-bg-accent"></div>
					<div className="skeleton h-10 w-full dark:bg-bg-accent"></div>
					<div className="skeleton h-10 w-full dark:bg-bg-accent"></div>
				</div>
				<div className="flex flex-col gap-4">
					{list.map((item) => {
						return <ListItemSkeleton key={item} />;
					})}
				</div>
			</div>
		);
	}

	return <div></div>;
}

function ListItemSkeleton() {
	return (
		<div className="flex justify-between gap-10">
			<div className="flex flex-col gap-2 w-full">
				<div className="skeleton h-4 w-full rounded-sm dark:bg-bg-accent"></div>
				<div className="skeleton h-3 w-1/2 rounded-sm dark:bg-bg-accent"></div>
			</div>
			<div className="skeleton h-14 w-14 shrink-0 rounded-full dark:bg-bg-accent"></div>
		</div>
	);
}
