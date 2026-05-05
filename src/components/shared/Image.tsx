import { ImageOff, LoaderCircle } from "lucide-react";
import { useState } from "react";
import imgSrcSets from "@/lib/imgSrcSets";

interface Props {
	altText: string;
	containerStyles?: string;
	fetchPriority?: "high" | "low";
	imgStyles?: string;
	lazyLoading?: "eager" | "lazy";
	sizes?: string;
	slug: string;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({
	altText,
	containerStyles = "w-full aspect-[7/5]",
	fetchPriority,
	imgStyles,
	lazyLoading = "lazy",
	sizes = "100vw",
	slug,
}: Props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { avif, jpeg, webp } = imgSrcSets(slug);

	return (
		<div className={`overflow-hidden bg-bg-accent ${containerStyles}`}>
			{loading && (
				<div className="flex items-center justify-center gap-2 text-sm p-4">
					<LoaderCircle className="size-6 stroke-1 animate-spin" />
					Loading...
				</div>
			)}
			{error && (
				<div className="flex items-center justify-center gap-2 text-sm p-4">
					<ImageOff className="size-6 stroke-1" />
					The image failed to load.
				</div>
			)}
			<picture className={`w-full h-full ${error ? "hidden" : ""}`}>
				<source srcSet={avif} sizes={sizes} type="image/avif" />
				<source srcSet={webp} sizes={sizes} type="image/webp" />
				<img
					alt={altText}
					className={`object-cover w-full h-full ${imgStyles}`}
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
