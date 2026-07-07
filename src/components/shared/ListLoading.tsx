export default function ListLoading() {
	const list = Array.from({ length: 10 }, (_, idx) => idx);
	const useCard = localStorage.getItem("useCardTheme");
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
