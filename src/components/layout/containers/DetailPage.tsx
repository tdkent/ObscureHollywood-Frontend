interface Props {
	children: React.ReactNode;
	labelText: string;
}

export default function DetailPage({ children, labelText }: Props) {
	return (
		<div className="page-margins">
			<span>{labelText}</span>
			<article className="flex flex-col gap-8 my-2">{children}</article>
		</div>
	);
}
