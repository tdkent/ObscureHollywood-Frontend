import { DateTime } from "luxon";

/** Return ISO date in long-form locale string format. */
export function getFormattedDateString(date: string): string {
	return DateTime.fromISO(date).toLocaleString({
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}
