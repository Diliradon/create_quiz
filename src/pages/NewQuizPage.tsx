import { FormQuestion } from '../components/FormQuestion';
import { FormQuiz } from '../components/FormQuiz';

export const NewQuizPage = () => {
  return (
    <main>
      <FormQuiz />

      <FormQuestion />

      <button type="submit">Create Questions</button>
    </main>
  );
};
