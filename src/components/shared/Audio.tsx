import { AUDIO_ASSETS_URL } from "@/constants/api.constants";

interface Props {
	slug: string;
}

export default function Audio({ slug }: Props) {
	return (
		// biome-ignore lint/a11y/useMediaCaption: not needed
		<audio controls src={`${AUDIO_ASSETS_URL}${slug}.mp3`}></audio>
	);
}
