import { DateTime } from "luxon";
import { dlText } from "@/types/ui.interface";

/** Return birth and death label text. */
export function getBirthDeathLabelText({
	age,
	birthDate,
	deathDate,
	isAlive,
}: {
	age: number | null;
	birthDate: string | null;
	deathDate: string | null;
	isAlive: boolean;
}) {
	const birthDateString = birthDate
		? getFormattedDateString(birthDate)
		: dlText.UNKNOWN;

	const deathDateString: string | null = deathDate
		? getFormattedDateString(deathDate)
		: dlText.UNKNOWN;

	let personAge: number | null;

	if (isAlive) {
		const start = DateTime.fromISO(birthDate as string);
		const curr = DateTime.now();
		const diff = curr.diff(start, "years").toObject();
		personAge = Math.floor(diff.years as number);
	} else {
		personAge = age;
	}

	const birthDateLabel = `${birthDateString}${isAlive ? ` (age ${personAge})` : ""}`;
	const deathDateLabel = isAlive
		? null
		: `${deathDateString}${age ? ` (age ${personAge})` : ""}`;

	return { birthDateLabel, deathDateLabel };
}

/** Return ISO date in long-form locale string format. */
function getFormattedDateString(date: string): string {
	return DateTime.fromISO(date).toLocaleString({
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function getPersonLifespanString({
	birthDate,
	deathDate,
}: {
	birthDate: string | null;
	deathDate: string | null;
}): string {
	if (!birthDate) return "";

	const birthYear = DateTime.fromISO(birthDate).year;

	if (!deathDate) return `Born ${birthYear}`;

	const deathYear = DateTime.fromISO(deathDate).year;

	return `${birthYear} - ${deathYear}`;
}

/** Return age in years, rounded down, or null. */
export function getStudioAge(
	yearFounded: number | null,
	yearClosed: number | null,
) {
	if (!yearFounded) return null;

	const start = DateTime.fromISO(`${yearFounded}-01-01`);
	const end = yearClosed
		? DateTime.fromISO(`${yearClosed}-01-01`)
		: DateTime.now();

	const ageInYears = end.diff(start, "years").toObject() as { years: number };

	return Math.floor(ageInYears.years);
}
