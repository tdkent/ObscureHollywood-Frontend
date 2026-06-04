export default function Splash() {
	return (
		<div className="w-full">
			<div
				className={`w-full h-lvh bg-[url(/img/hollywoodland-sign.jpg)] bg-position-[40%_bottom] bg-no-repeat bg-cover`}
			>
				<div className="w-full h-full bg-black/10 backdrop-blur-xs xl:backdrop-blur-[6px]">
					<div className="pt-40 relative flex flex-col h-full gap-14 sm:pt-44 md:pt-48">
						<h1 className="flex flex-col gap-4 px-6 text-[40px] font-bodini-moda italic font-bold leading-12 sm:px-12 sm:text-[42px] md:text-[52px] md:leading-16 lg:text-7xl xl:text-8xl xl:leading-24 xl:px-24">
							<span className="block motion-safe:animate-fade-move-up text-light-text">
								Neglected films.
							</span>
							<span className="block motion-safe:animate-fade-move-up motion-safe:[animation-delay:300ms] text-light-text">
								Stars of the past.
							</span>
							<span className="block motion-safe:animate-fade-move-up motion-safe:[animation-delay:600ms] bg-linear-to-r from-gold-dark via-gold-light to-gold-dark bg-clip-text text-transparent">
								The obscure revisited.
							</span>
						</h1>
						<div className="h-full w-full flex">
							<div className="bg-black/50 px-6 py-4 self-end flex items-center justify-center motion-safe:animate-fade-move-up motion-safe:[animation-delay:900ms] sm:px-12 sm:py-8 xl:px-24">
								<p className="text-light-text text-balance font-thin text-lg leading-8 motion-safe:animate-fade motion-safe:[animation-delay:1200ms] sm:text-xl lg:text-2xl lg:py-10 xl:pr-40">
									We feature reviews, research and commentary about little-known
									Hollywood films and artists worth revisiting. We encourage you
									to discover and enjoy these films as audiences of the past
									did, and as we do today.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
