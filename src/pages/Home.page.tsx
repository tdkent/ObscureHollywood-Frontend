import Section from "@/components/home/Section";
import Splash from "@/components/home/Splash";

export default function HomePage() {
	const featureImgs: { name: string; slug: string }[] = [
		{
			name: "Douglas Fairbanks",
			slug: "douglas-fairbanks-at-triangle-fine-arts",
		},
		{
			name: "Corriganville",
			slug: "corriganville",
		},
		{
			name: "Quatermass 2 (1957)",
			slug: "underrated-sci-fi-films-of-the-1950s",
		},
	];

	const filmImgs: { name: string; slug: string }[] = [
		{
			name: "Hell Bent (1918)",
			slug: "hell-bent-1918",
		},
		{
			name: "Show People (1928)",
			slug: "show-people-1928",
		},
		{
			name: "Stormy Weather (1943)",
			slug: "stormy-weather-1943",
		},
	];

	const peopleImgs: { name: string; slug: string }[] = [
		{
			name: "King Vidor",
			slug: "king-vidor",
		},
		{
			name: "Kay Francis",
			slug: "kay-francis",
		},
		{
			name: "Lee Tracy",
			slug: "lee-tracy",
		},
	];

	return (
		<>
			<Splash />
			<div className="flex flex-col">
				<Section
					imgs={featureImgs}
					listHeading="Our latest features"
					route="features"
					sectionClass="home-features"
					title="Feature articles"
					text="In-depth articles about a diverse range of topics including early
						film history, lost silents, and much more."
				/>
				<Section
					imgs={filmImgs}
					listHeading="Our newest films"
					route="films"
					sectionClass="home-films"
					title="Film discussions"
					text="Synopses and discussions of nearly 200 obscure and classic Hollywood
						films from the silent, pre-Code, and classic eras."
				/>
				<Section
					imgs={peopleImgs}
					listHeading="Our recent bios"
					route="people"
					sectionClass="home-people"
					title="Actor & director biographies"
					text="Explore detailed biographies of dozens of actors, directors, and
						screenwriters."
				/>
			</div>
		</>
	);
}
