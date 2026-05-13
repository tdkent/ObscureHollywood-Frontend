import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";
import Image from "@/components/shared/Image";
import Loading from "@/components/shared/Loading";
import type { PartialListItem } from "@/types/paginated-response.interface";

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
	const { data, error, isPending } = useQuery({
		queryKey: [route, "recent"],
		queryFn: () => httpRequest(`/${route}/recent`),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const recentArticles = data as PartialListItem[];

	return (
		<section className={`py-8 ${sectionClass}`}>
			<div className="flex flex-nowrap">
				{imgs.map(({ name, slug }) => {
					return <Image key={slug} altText={name} slug={slug} />;
				})}
			</div>
			<div className="flex flex-col text-center gap-4 p-6">
				<h2 className="text-3xl font-bold">{title}</h2>
				<p>{text}</p>
				<div className="flex flex-col gap-4">
					<h3 className="font-bodini-moda italic text-2xl font-bold">
						{listHeading}:
					</h3>
					<ul className="flex flex-col gap-6">
						{recentArticles.map(({ id, name, slug }) => {
							return (
								<li
									className="font-bold text-sm rounded-2xl overflow-hidden bg-bg-accent"
									key={id}
								>
									<Link to={`/${route}/${slug}`}>
										<div className="p-4 flex items-center flex-nowrap gap-4">
											<Image
												altText={name}
												containerStyles="rounded-2xl w-3/10 aspect-[6/5]"
												slug={slug}
											/>
											<span className="text-left">{name}</span>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}
