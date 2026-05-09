import Image from "@/components/shared/Image";

interface Props {
	children: React.ReactNode;
	name: string;
	slug: string;
}

/** Render header element of article page with heading and children. */
export default function ArticleHeader({ children, name, slug }: Props) {
	return (
		<header>
			<h1>{name}</h1>
			<Image altText={name} slug={slug} />
			{children}
		</header>
	);
}
