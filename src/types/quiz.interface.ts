/**
 * Quizzes
 */

export interface Quiz {
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

/**
 * Quiz results
 */

interface QuizResult {
	id: number;
	userId: string;
	score: number;
	createdAt: string;
}

export interface QuizResultWithCorrectAnswers extends QuizResult {
	correct: number[];
}

export interface QuizResultWithRelations extends QuizResult {
	quiz: Quiz;
}

/**
 * User quiz results
 */

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
	recentActivity: QuizResultWithRelations[];
}
