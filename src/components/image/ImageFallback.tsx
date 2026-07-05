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
		<div className="flex items-center justify-center gap-2 text-sm p-4 h-full">
			{isHeader ? (
				personGender ? (
					<span>{personGender}</span>
				) : (
					<>
						<CircleAlert className="stroke-1" />
						<span>No image available!</span>
					</>
				)
			) : (
				<ImageOff className="stroke-1 stroke-text/50" />
			)}
		</div>
	);
}
