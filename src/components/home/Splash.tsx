export default function Splash() {
	return (
		<div className="w-full lg:drop-shadow-xl lg:drop-shadow-blue-300">
			<div
				className={`w-full h-lvh max-h-200 bg-[url(/img/hollywoodland-sign.jpg)] bg-position-[40%_bottom] bg-no-repeat bg-cover sm:min-h-dvw`}
			>
				<div className="w-full h-full bg-black/10 backdrop-blur-xs lg:backdrop-blur-xs">
					<div className="pt-40 relative flex flex-col h-full gap-14 sm:pt-44">
						<h1 className="flex flex-col gap-4 px-6 text-[40px] font-bodini-moda italic font-bold leading-12 sm:px-12 sm:text-[42px]">
							<span className="block motion-safe:animate-fade-move-up text-text-white">
								Neglected films.
							</span>
							<span className="block motion-safe:animate-fade-move-up motion-safe:[animation-delay:300ms] text-text-white">
								Stars of the past.
							</span>
							<span className="block motion-safe:animate-fade-move-up motion-safe:[animation-delay:600ms] bg-linear-to-r from-gold to-gold-light bg-clip-text text-transparent">
								The obscure revisited.
							</span>
						</h1>
						<div className="bg-black/50 px-6 h-full flex items-center motion-safe:animate-fade-move-up motion-safe:[animation-delay:900ms] sm:px-20">
							<p className="text-text-white text-xl leading-8 motion-safe:animate-fade motion-safe:[animation-delay:1200ms] sm:text-2xl">
								We feature reviews, research and commentary about little-known
								Hollywood films and artists worth revisiting. We encourage you
								to discover and enjoy these films as audiences of the past did,
								and as we do today.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
