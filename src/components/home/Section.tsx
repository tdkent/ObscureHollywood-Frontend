import SectionHeaderImgs from "@/components/home/SectionHeaderImgs";
import SectionListItems from "@/components/home/SectionListItems";

interface Props {
	imgs: { name: string; slug: string }[];
	listHeading: string;
	route: "features" | "films" | "people";
	sectionClass: string;
	text: string;
	title: string;
}

export default function Section({
	imgs,
	listHeading,
	route,
	sectionClass,
	text,
	title,
}: Props) {
	return (
		<section className={`py-8 ${sectionClass}`}>
			<SectionHeaderImgs imgs={imgs} />
			<div className="flex flex-col text-center gap-4 py-6">
				<h2 className="text-3xl font-bold px-6">{title}</h2>
				<p className="px-6">{text}</p>
				<div className="flex flex-col gap-4">
					<h3 className="font-bodini-moda italic text-2xl font-bold">
						{listHeading}:
					</h3>
					<SectionListItems route={route} />
				</div>
			</div>
		</section>
	);
}
