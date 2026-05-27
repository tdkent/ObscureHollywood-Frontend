export default function ScoreModal() {
	return (
		<dialog id="score-modal" className="modal">
			<div className="modal-box">
				<h3 className="font-bold text-lg">Hello!</h3>
				<p className="py-4">Press ESC key or click the button below to close</p>
				<div className="modal-action">
					<form method="dialog">
						{/** biome-ignore lint/a11y/useButtonType: cannot specify to close modal */}
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}
