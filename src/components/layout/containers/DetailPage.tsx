interface Props {
	children: React.ReactNode;
}

export default function DetailPage({ children }: Props) {
	return (
		<div className="page-margins bg-content">
			<article className="flex flex-col gap-8 sm:gap-12">{children}</article>
		</div>
	);
}
