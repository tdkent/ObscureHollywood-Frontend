export interface Quiz {
	id: number;
	name: string;
	quizQuestions: QuizQuestion[];
	slug: string;
	theme: "films" | "genres" | "people";
}

interface QuizQuestion {
	id: number;
	questionText: string;
	questingNumber: number;
	answerOptions: string[];
	correctAnswer: number;
}
