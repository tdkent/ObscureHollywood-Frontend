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
			<div className="px-6 sm:px-12 lg:mt-4">
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
					imgStyles="lg:object-[0_20%]"
					isHeader
					slug={slug}
					containerStyles="w-full aspect-7/5 lg:aspect-video lg:object-bottom"
				/>
			)}
			{children}
		</header>
	);
}
