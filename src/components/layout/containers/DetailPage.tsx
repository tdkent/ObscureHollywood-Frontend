interface Props {
	children: React.ReactNode;
	labelText: string;
}

export default function DetailPage({ children, labelText }: Props) {
	return (
		<div className="page-margins">
			<span className="px-6 text-text-heading/70 sm:px-12">{labelText}</span>
			<article className="flex flex-col gap-8 my-4 sm:gap-12">
				{children}
			</article>
		</div>
	);
}
