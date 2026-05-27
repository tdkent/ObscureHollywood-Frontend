export function createScoreMsg(score: number) {
	switch (score) {
		case 0: {
			return "Oh, bother!";
		}

		case 1:
		case 2:
		case 3: {
			return "Rotten luck!";
		}

		case 4:
		case 5:
		case 6: {
			return "Not great, not terrible!";
		}

		case 7:
		case 8: {
			return "Very good!";
		}

		case 9: {
			return "Outstanding!";
		}

		case 10: {
			return "Perfect!!!";
		}

		default:
			return "";
	}
}
