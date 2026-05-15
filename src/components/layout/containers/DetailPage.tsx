interface Props {
	children: React.ReactNode;
	labelText: string;
}

export default function DetailPage({ children, labelText }: Props) {
	return (
		<div className="page-margins">
			<span className="px-6 text-text-heading/70">{labelText}</span>
			<article className="flex flex-col gap-8 my-4">{children}</article>
		</div>
	);
}
