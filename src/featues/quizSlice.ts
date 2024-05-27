/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quiz, QuizErrors } from '../types/Quiz';
import { nanoid } from '@reduxjs/toolkit';

export interface QuizState {
  quiz: Quiz;
  status: 'fulfilled' | 'pending' | 'rejected';
}

const initialState: QuizState = {
  quiz: {
    id: nanoid(),
    title: '',
    description: '',
    quesrions: [],
    errors: {
      title: '',
      description: '',
    },
  },
  status: 'fulfilled',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateQuiz: (state, action: PayloadAction<Partial<Quiz>>) => {
      state.quiz = {
        ...state.quiz,
        ...action.payload,
      };
    },

    updateQuizErrors: (state, action: PayloadAction<Partial<QuizErrors>>) => {
      state.quiz.errors = {
        ...state.quiz.errors,
        ...action.payload,
      };
    },
  },
});

export const { updateQuiz, updateQuizErrors } = quizSlice.actions;

export default quizSlice.reducer;
