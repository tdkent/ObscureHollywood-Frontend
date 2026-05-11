export default function Splash() {
	return (
		<header className="w-full lg:drop-shadow-xl lg:drop-shadow-blue-300">
			<div
				className={`w-full h-lvh bg-[url(/img/hollywoodland-sign.jpg)] bg-position-[40%_bottom] bg-no-repeat bg-cover lg:aspect-video lg:h-auto xl:aspect-2/1`}
			>
				<div className="w-full h-full bg-black/10 backdrop-blur-xs lg:backdrop-blur-xs">
					<div className="pt-40 relative flex flex-col h-full gap-14">
						<h1 className="px-6 bg-linear-to-r from-gold to-gold-light bg-clip-text text-transparent text-[40px] font-bodini-moda italic font-bold leading-12 max-w-120 sm:px-8 sm:text-6xl sm:leading-16 md:text-[82px] md:leading-20 sm:max-w-full md:px-10 lg:text-6xl lg:leading-16 xl:text-[82px] xl:leading-20 xl:px-20 2xl:text-8xl 2xl:leading-24">
							<div className="flex flex-col gap-4">
								<span className="block">Neglected films.</span>
								<span className="block">Stars of the past.</span>
								<span className="block text-text">The obscure revisited.</span>
							</div>
						</h1>
						<div className="bg-black/50 px-6 h-full flex items-center">
							<p className="text-xl leading-8">
								We feature reviews, research and commentary about little-known
								Hollywood films and artists worth revisiting. We encourage you
								to discover and enjoy these films as audiences of the past did,
								and as we do today.
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
