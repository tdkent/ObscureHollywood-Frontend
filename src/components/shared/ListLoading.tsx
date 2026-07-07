import { createEmptyList } from "@/util/createEmptyList";

export default function ListLoading() {
	const list = createEmptyList(12);
	const useCard = localStorage.getItem("useCardTheme");

	if (useCard) {
		return (
			<div className="flex flex-col sm:flex-row sm:flex-wrap">
				{list.map((item) => {
					return (
						<div
							key={item}
							className="flex flex-col gap-3 items-center basis-full px-2 py-4 sm:basis-1/2 sm:w-2/5 md:py-6 lg:basis-1/3"
						>
							<div className="skeleton w-full aspect-7/5 rounded-lg dark:bg-content-alt"></div>
							<div className="skeleton h-6 w-3/5 rounded-sm dark:bg-content-alt"></div>
							<div className="skeleton h-6 w-2/5 rounded-sm dark:bg-content-alt"></div>
						</div>
					);
				})}
			</div>
		);
	}

	return (
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
	);
}
