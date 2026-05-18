import Image from "@/components/shared/Image";

interface Props {
	children?: React.ReactNode;
	name: string;
	showImage?: boolean;
	slug: string;
	subtitle?: number | string | null;
}

/** Render header element of article page with heading and children. */
export default function ArticleHeader({
	children,
	name,
	showImage,
	slug,
	subtitle,
}: Props) {
	return (
		<header className="flex flex-col gap-6">
			<div className="px-6 flex flex-col gap-2 sm:px-12">
				<h1 className="text-3xl font-normal md:text-4xl">{name}</h1>
				{subtitle && (
					<h2 className="text-xl text-secondary-text md:text-2xl">
						{subtitle}
					</h2>
				)}
			</div>
			{showImage && (
				<Image
					altText={name}
					isHeader
					slug={slug}
					containerStyles="mt-4 w-full aspect-7/5 lg:aspect-video"
				/>
			)}
			{children}
		</header>
	);
}
