import { createFileRoute } from "@tanstack/react-router";
import Section from "@/components/home/Section";
import Splash from "@/components/home/Splash";

export const Route = createFileRoute("/")({
	//? Cannot use SSR route loader because fetch is prop-dependent
	//? Route loader cannot access component props
	component: Home,
	head: () => ({
		meta: [
			{
				title:
					"Reviews and commentary about obscure films and artists - Obscure Hollywood",
			},
			{
				name: "description",
				content:
					"Obscure Hollywood features reviews, research and commentary about little-known Hollywood films and artists, particularly of the silent and early sound eras, that are worth revisiting.",
			},
		],
	}),
});

function Home() {
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
		{
			name: "John Ford, Harry Carey",
			slug: "john-ford-and-harry-carey-at-universal-studios",
		},
		{
			name: "TCM 2013",
			slug: "tcm-2013",
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
		{
			name: "Rafter Romance (1933)",
			slug: "rafter-romance-1933",
		},
		{
			name: "When the Clouds Roll By (1919)",
			slug: "when-the-clouds-roll-by-1919",
		},
	];

	const peopleImgs: { name: string; slug: string }[] = [
		{
			name: "Dorothy Arzner",
			slug: "dorothy-arzner",
		},
		{
			name: "King Vidor",
			slug: "king-vidor",
		},
		{
			name: "Kay Francis",
			slug: "kay-francis",
		},
		{
			name: "Alma Rubens",
			slug: "alma-rubens",
		},
		{
			name: "Lee Tracy",
			slug: "lee-tracy",
		},
	];

	return (
		<>
			<Splash />
			<div className="flex flex-col max-w-292.5 min-[1170px]:border-x">
				<Section
					imgs={featureImgs}
					listHeading="Our latest features"
					route="features"
					title="Feature articles"
					text="In-depth articles about a diverse range of topics including early
							film history, lost silents, and much more."
				/>
				<Section
					imgs={filmImgs}
					isAlt
					listHeading="Our newest films"
					route="films"
					title="Film discussions"
					text="Synopses and discussions of nearly 200 obscure and classic Hollywood
							films from the silent, pre-Code, and classic eras."
				/>
				<Section
					imgs={peopleImgs}
					listHeading="Our recent bios"
					route="people"
					title="Actor & director biographies"
					text="Explore detailed biographies of dozens of actors, directors, and
							screenwriters."
				/>
			</div>
		</>
	);
}
