export default function Splash() {
	return (
		<header className="w-full lg:drop-shadow-xl lg:drop-shadow-blue-300">
			<div
				className={`w-full h-lvh bg-[url(/img/hollywoodland-sign.jpg)] bg-position-[40%_center] bg-no-repeat bg-cover lg:aspect-video lg:h-auto xl:aspect-2/1`}
			>
				<div className="w-full h-full backdrop-blur-xs lg:backdrop-blur-xs">
					<h1 className="relative bg-linear-to-r from-gold to-gold bg-clip-text text-transparent text-[40px] font-bodini-moda italic font-bold leading-12 top-40 px-4 max-w-120 sm:px-8 sm:text-6xl sm:top-36 sm:leading-16 md:text-[82px] md:leading-20 sm:max-w-full md:px-10 md:top-40 lg:text-6xl lg:leading-16 xl:text-[82px] xl:leading-20 xl:px-20 2xl:text-8xl 2xl:leading-24">
						<div className="flex flex-col gap-2">
							<span className="block">Neglected films.</span>
							<span className="block">Stars of the past.</span>
							<span className="block text-text">The obscure revisited.</span>
						</div>
					</h1>
				</div>
			</div>
		</header>
	);
}
