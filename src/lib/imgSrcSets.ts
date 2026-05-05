import { IMG_ASSETS_URL } from "@/constants/api.constants";

export default function imgSrcSets(slug: string) {
	return {
		avif: `${IMG_ASSETS_URL}/${slug}@80.avif 80w, ${IMG_ASSETS_URL}/${slug}@480.avif 480w, ${IMG_ASSETS_URL}/${slug}@768.avif 768w, ${IMG_ASSETS_URL}/$${slug}@1024.avif 1024w, ${IMG_ASSETS_URL}/${slug}@1280.avif 1280w, ${IMG_ASSETS_URL}/${slug}@1440.avif 1440w, ${IMG_ASSETS_URL}/${slug}@1920.avif 1920w`,
		jpeg: `${IMG_ASSETS_URL}/${slug}@80.jpeg 80w, ${IMG_ASSETS_URL}/${slug}@480.jpeg 480w, ${IMG_ASSETS_URL}/${slug}@768.jpeg 768w, ${IMG_ASSETS_URL}/${slug}@1024.jpeg 1024w, ${IMG_ASSETS_URL}/${slug}@1280.jpeg 1280w, ${IMG_ASSETS_URL}/${slug}@1440.jpeg 1440w, ${IMG_ASSETS_URL}/${slug}@1920.jpeg 1920w`,
		webp: `${IMG_ASSETS_URL}/${slug}@80.webp 80w, ${IMG_ASSETS_URL}/${slug}@480.webp 480w, ${IMG_ASSETS_URL}/${slug}@768.webp 768w, ${IMG_ASSETS_URL}/${slug}@1024.webp 1024w, ${IMG_ASSETS_URL}/${slug}@1280.webp 1280w, ${IMG_ASSETS_URL}/${slug}@1440.webp 1440w, ${IMG_ASSETS_URL}/${slug}@1920.webp 1920w`,
	};
}
