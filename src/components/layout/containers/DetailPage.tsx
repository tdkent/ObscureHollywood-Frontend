interface Props {
	children: React.ReactNode;
}

export default function DetailPage({ children }: Props) {
	return (
		<div className="page-margins bg-content">
			<article className="flex flex-col gap-8 my-4 sm:gap-12">
				{children}
			</article>
		</div>
	);
}
