import { ImageOff, LoaderCircle } from "lucide-react";
import { useState } from "react";

interface Props {
	altText: string;
	aspectRatio?: string;
	fetchPriority?: "high";
	imgStyles?: string;
	imgUrl: string;
	isHeader?: boolean;
	lazy?: boolean;
	sizes?: string;
	srcSets: SrcSets;
}

interface SrcSets {
	avif: string;
	webp: string;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({
	altText,
	aspectRatio,
	fetchPriority,
	imgStyles,
	imgUrl,
	isHeader,
	lazy,
	sizes,
	srcSets,
}: Props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// If no AR specify one to avoid layout shift after load or error
	const loadingAspectRatio = loading || error ? "aspect-5/3" : "aspect-auto";

	return (
		<div
			className={`w-full overflow-hidden bg-[#f9f9f9] ${aspectRatio || loadingAspectRatio}`}
		>
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
			<picture
				className={`${isHeader ? "flex" : "block"} w-full h-full ${error ? "hidden" : ""}`}
			>
				<source srcSet={srcSets.avif} sizes={sizes} type="image/avif" />
				<source srcSet={srcSets.webp} sizes={sizes} type="image/webp" />
				<img
					src={imgUrl}
					alt={altText}
					sizes={sizes}
					loading={lazy ? "lazy" : "eager"}
					className={`object-cover w-full h-auto ${imgStyles}`}
					onLoad={() => setLoading(false)}
					onError={() => {
						setLoading(false);
						setError(true);
					}}
					fetchPriority={fetchPriority}
				/>
			</picture>
		</div>
	);
}
