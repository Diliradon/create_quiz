export interface Quiz {
  id: string;
  title: string;
  description: string;
  quesrions: Quesrion[];
  errors: QuizErrors;
}

export interface QuizErrors {
  title: string;
  description: string;
}

export interface Quesrion {
  id: string;
  quesrion: string;
  answers: Answer[];
  errorQuesrion: string;
}

export interface Answer {
  id: string;
  answer: 'string';
  isCorrect: boolean;
  isSelect: boolean;
  errorAnswer: string;
}
