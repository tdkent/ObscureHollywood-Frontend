import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import ImageFallback from "@/components/image/ImageFallback";
import imgSrcSets from "@/lib/imgSrcSets";

interface Props {
	altText: string;
	category?: "feature" | "film" | "person" | "studio";
	containerStyles?: string;
	fetchPriority?: "high" | "low";
	imgStyles?: string;
	isHeader?: boolean;
	lazyLoading?: "eager" | "lazy";
	personGender?: string | null;
	sizes?: string;
	slug: string;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({
	altText,
	category,
	containerStyles = "w-full aspect-[7/5]",
	fetchPriority,
	imgStyles,
	isHeader,
	lazyLoading = "lazy",
	personGender,
	sizes = "100vw",
	slug,
}: Props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { avif, jpeg, webp } = imgSrcSets(slug);

	return (
		<div className={`overflow-hidden bg-content-alt ${containerStyles}`}>
			{loading && (
				<div className="flex items-center justify-center gap-2 text-sm p-4 h-full">
					<ImageIcon className="stroke-1 stroke-text/50" />
				</div>
			)}
			{error && (
				<ImageFallback
					category={category}
					isHeader={isHeader}
					personGender={personGender}
				/>
			)}
			<picture className={`w-full h-full ${error ? "hidden" : ""}`}>
				<source srcSet={avif} sizes={sizes} type="image/avif" />
				<source srcSet={webp} sizes={sizes} type="image/webp" />
				<img
					alt={altText}
					className={`object-cover w-full h-full ${imgStyles ?? ""}`}
					fetchPriority={fetchPriority}
					loading={lazyLoading}
					onError={() => {
						setLoading(false);
						setError(true);
					}}
					onLoad={() => setLoading(false)}
					sizes={sizes}
					srcSet={jpeg}
				/>
			</picture>
		</div>
	);
}
