import Image from "@/components/shared/Image";

interface Props {
	children?: React.ReactNode;
	name: string;
	slug: string;
	subtitle: string | null;
}

/** Render header element of article page with heading and children. */
export default function ArticleHeader({
	children,
	name,
	slug,
	subtitle,
}: Props) {
	return (
		<header className="flex flex-col gap-4">
			{subtitle ? (
				<div>
					<h1 className="text-3xl font-normal">{name}</h1>
					<h2 className="text-xl">{subtitle}</h2>
				</div>
			) : (
				<h1>{name}</h1>
			)}
			<Image altText={name} slug={slug} />
			{children}
		</header>
	);
}
