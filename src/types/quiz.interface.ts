export interface Quiz {
	id: number;
	name: string;
	quizQuestions: QuizQuestion[];
	slug: string;
	theme: "films" | "genres" | "people";
}

export interface QuizQuestion {
	id: number;
	questionText: string;
	questionNumber: number;
	answerOptions: string[];
	correctAnswer: number;
}
