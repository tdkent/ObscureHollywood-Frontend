import { DateTime } from "luxon";
import type { Person } from "@/types/person.interface";
import { dlText } from "@/types/ui.interface";

/** Return birth and death label text. */
export function getBirthDeathLabelText({
	age,
	ageRange,
	birthDate,
	deathDate,
	isAlive,
	partialBirthDate,
	partialDeathDate,
}: Pick<
	Person,
	| "age"
	| "ageRange"
	| "birthDate"
	| "deathDate"
	| "isAlive"
	| "partialBirthDate"
	| "partialDeathDate"
>) {
	let birthDateString: string,
		deathDateString: string,
		personAge: string | null;

	if (partialBirthDate) birthDateString = partialBirthDate;
	else if (birthDate) birthDateString = getFormattedDateString(birthDate);
	else birthDateString = dlText.UNKNOWN;

	if (partialDeathDate) deathDateString = partialDeathDate;
	else if (deathDate) deathDateString = getFormattedDateString(deathDate);
	else deathDateString = dlText.UNKNOWN;

	if (isAlive) {
		const start = DateTime.fromISO(birthDate as string);
		const curr = DateTime.now();
		const diff = curr.diff(start, "years").toObject();
		personAge = Math.floor(diff.years as number).toString();
	} else if (ageRange) {
		personAge = ageRange;
	} else {
		personAge = age ? age.toString() : null;
	}

	const birthDateLabel = `${birthDateString}${isAlive ? ` (age ${personAge})` : ""}`;
	const deathDateLabel = isAlive
		? null
		: `${deathDateString}${personAge ? ` (age ${personAge})` : ""}`;

	return { birthDateLabel, deathDateLabel };
}

/** Return ISO date in long-form locale string format. */
function getFormattedDateString(date: string): string {
	//? Use UTC time zone to avoid offsets of old dates.
	//? More info: https://github.com/moment/luxon/issues/1506
	return DateTime.fromISO(date, { zone: "utc" }).toLocaleString({
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
