interface Quiz {
	id: number;
	name: string;
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

export interface QuizWithRelations extends Quiz {
	quizQuestions: QuizQuestion[];
}

export interface QuizResult {
	id: number;
	userId: string;
	score: number;
	correct: number[];
	createdAt: string;
}

export interface UserSingleQuizResults {
	count: number;
	highScore: number;
	prevScore: number;
}

export interface UserAllQuizResults {
	totalCount: number;
	distinctCount: number;
	avgScore: number;
	quizCount: number;
	percentComplete: number;
	recentActivity: (QuizResult & { quiz: Quiz })[];
}
