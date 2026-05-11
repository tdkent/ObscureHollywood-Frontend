import Section from "@/components/home/Section";
import Splash from "@/components/home/Splash";

export default function HomePage() {
	return (
		<>
			<Splash />
			<div className="flex flex-col px-6 py-12 divide-y">
				<Section
					title="Feature articles"
					text="In-depth articles about a diverse range of topics including early
						film history, lost silents, and much more."
				/>
				<Section
					title="Film discussions"
					text="Synopses and discussions of nearly 200 obscure and classic Hollywood
						films from the silent, pre-Code, and classic eras."
				/>
				<Section
					title="Actor & director biographies"
					text="Explore detailed biographies of dozens of actors, directors, and
						screenwriters."
				/>
			</div>
		</>
	);
}
