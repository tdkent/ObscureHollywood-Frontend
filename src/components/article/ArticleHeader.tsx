import { useLocation } from "react-router";
import Image from "@/components/shared/Image";
import type { Entity } from "@/types/ui.interface";

interface Props {
	children?: React.ReactNode;
	name: string;
	slug: string;
	subtitle?: string | null;
}

/** Render header element of article page with heading and children. */
export default function ArticleHeader({
	children,
	name,
	slug,
	subtitle,
}: Props) {
	const { pathname } = useLocation();

	const entity = pathname.split("/")[1] as Entity;
	const showsImage: Entity[] = ["features", "films", "people"];
	const showImage = showsImage.includes(entity);

	return (
		<header className="flex flex-col gap-6">
			<div className="px-6 flex flex-col gap-2">
				<h1 className="text-5xl font-normal text-text">{name}</h1>
				{subtitle && <h2 className="text-2xl">{subtitle}</h2>}
			</div>
			{showImage && (
				<Image
					altText={name}
					slug={slug}
					containerStyles="mt-4 w-full aspect-[7/5]"
				/>
			)}
			{children}
		</header>
	);
}
