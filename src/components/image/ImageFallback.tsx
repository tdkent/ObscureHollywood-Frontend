import { CircleAlert, ImageOff } from "lucide-react";

interface ImageFallback {
	isHeader?: boolean;
	personGender?: string | null;
}

export default function ImageFallback({
	isHeader,
	personGender,
}: ImageFallback) {
	return (
		<div>
			{isHeader ? (
				personGender ? (
					<img
						src={`/img/fallback-${personGender}.jpg`}
						alt={`silhouette of a person`}
						className="object-cover w-full h-full"
					/>
				) : (
					<div className="flex items-center justify-center gap-2 text-sm p-4 aspect-7/5 sm:text-base">
						<CircleAlert className="stroke-1" />
						<span>No image available!</span>
					</div>
				)
			) : (
				<ImageOff className="stroke-1 stroke-text/50" />
			)}
		</div>
	);
}
