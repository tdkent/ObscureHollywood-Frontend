export default function Splash() {
	return (
		<div className="w-full lg:drop-shadow-xl lg:drop-shadow-blue-300">
			<div
				className={`w-full h-lvh bg-[url(/img/hollywoodland-sign.jpg)] bg-position-[40%_bottom] bg-no-repeat bg-cover lg:aspect-video lg:h-auto xl:aspect-2/1`}
			>
				<div className="w-full h-full bg-black/10 backdrop-blur-xs lg:backdrop-blur-xs">
					<div className="pt-40 relative flex flex-col h-full gap-14">
						<h1 className="flex flex-col gap-4 px-6 text-[40px] font-bodini-moda italic font-bold leading-12">
							<span className="block animate-fade-move-up text-text-white">
								Neglected films.
							</span>
							<span className="block animate-fade-move-up animation-delay-300 text-text-white">
								Stars of the past.
							</span>
							<span className="block animate-fade-move-up animation-delay-600 bg-linear-to-r from-gold to-gold-light bg-clip-text text-transparent">
								The obscure revisited.
							</span>
						</h1>
						<div className="bg-black/50 px-6 h-full flex items-center animate-fade-move-up animation-delay-900">
							<p className="text-text-white text-xl leading-8 animate-fade animation-delay-1200">
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
