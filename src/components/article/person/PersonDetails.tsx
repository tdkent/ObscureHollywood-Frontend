import type { PersonWithRelations } from "@/types/person.interface";

interface Props {
	person: PersonWithRelations;
}

export default function PersonDetails({ person }: Props) {
	const fullName = `${person.firstName} ${person.lastName}`;
	return (
		<section>
			<h1>{fullName}</h1>
			<dl>
				<div>
					<dt>Born</dt>
					<dd>{person.birthDate}</dd>
				</div>
				<div>
					<dt>Died</dt>
					<dd>{person.deathDate}</dd>
				</div>
				<div>
					<dt>Born in</dt>
					<dd>{person.birthPlace}</dd>
				</div>
				<div>
					<dt>Died in</dt>
					<dd>{person.deathPlace}</dd>
				</div>
			</dl>
		</section>
	);
}
