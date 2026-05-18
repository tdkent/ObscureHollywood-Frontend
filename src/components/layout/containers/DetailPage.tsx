interface Props {
	children: React.ReactNode;
	labelText: string;
}

export default function DetailPage({ children, labelText }: Props) {
	return (
		<div className="page-margins bg-content">
			<span className="px-6 text-secondary-text sm:px-12">{labelText}</span>
			<article className="flex flex-col gap-8 my-4 sm:gap-12">
				{children}
			</article>
		</div>
	);
}
