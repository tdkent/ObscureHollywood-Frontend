interface Props {
	text: string;
	title: string;
}

export default function Section({ text, title }: Props) {
	return (
		<section className="py-8">
			<h2 className="text-3xl font-bold">{title}</h2>
			<p>{text}</p>
		</section>
	);
}
