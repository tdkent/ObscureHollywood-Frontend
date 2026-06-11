export default function ThemeToggle() {
	return (
		<div className="px-6">
			<label className="flex cursor-pointer gap-2 text-sm">
				<span className="label-text">List</span>
				<input type="checkbox" value="" className="toggle" />
				<span className="label-text">Card</span>
			</label>
		</div>
	);
}
