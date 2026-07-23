import { CircleAlert, ImageOff } from "lucide-react";

interface ImageFallback {
	category?: "feature" | "film" | "person" | "studio";
	isHeader?: boolean;
	personGender?: string | null;
}

/**
 * Conditionally display studio/person fallback or generic missing image display.
 */
export default function ImageFallback({
	category,
	isHeader,
	personGender,
}: ImageFallback) {
	// Studio fallback image
	if (category && category === "studio") {
		return (
			<img
				src={`/img/fallback-studio.jpg`}
				alt={`Silhouette of a movie studio`}
				className="object-cover w-full h-full"
			/>
		);
	}

	// Person fallback image
	if (personGender) {
		return (
			<img
				src={`/img/fallback-${personGender}.jpg`}
				alt={`silhouette of a person`}
				className="object-cover w-full h-full"
			/>
		);
	}

	// Generic error fallbacks
	return isHeader ? (
		<div className="flex items-center justify-center gap-2 text-sm p-4 aspect-7/5 sm:text-base">
			<CircleAlert className="stroke-1" />
			<span>No image available!</span>
		</div>
	) : (
		<div className="w-full aspect-7/5 flex items-center justify-center">
			<ImageOff className="stroke-1 stroke-text/50 size-8" />
		</div>
	);
}
