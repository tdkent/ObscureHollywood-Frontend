import SectionHeaderImgs from "@/components/home/SectionHeaderImgs";
import SectionListItems from "@/components/home/SectionListItems";

interface Props {
	imgs: { name: string; slug: string }[];
	isAlt?: boolean;
	listHeading: string;
	route: "features" | "films" | "people";
	text: string;
	title: string;
}

export default function Section({
	imgs,
	isAlt,
	listHeading,
	route,
	text,
	title,
}: Props) {
	return (
		<section className={`py-8 sm:py-12 ${isAlt ? "section-alt" : "section"}`}>
			<SectionHeaderImgs imgs={imgs} />
			<div className="flex flex-col text-center gap-4 py-6 sm:gap-8 sm:py-10">
				<h2 className="text-3xl font-bold px-6 text-gold-dark sm:text-5xl sm:px-20">
					{title}
				</h2>
				<p className="px-6 sm:px-20 sm:text-xl lg:px-60">{text}</p>
				<div className="flex flex-col gap-4 sm:gap-8">
					<h3 className="text-2xl sm:text-3xl">{listHeading}:</h3>
					<SectionListItems route={route} />
				</div>
			</div>
		</section>
	);
}
