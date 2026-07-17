import { DateTime } from "luxon";

/** Return ISO date in long-form locale string format. */
export function getFormattedDateString(date: string): string {
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
