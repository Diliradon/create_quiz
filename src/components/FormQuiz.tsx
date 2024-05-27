import { useAppDispatch, useAppSelector } from '../app/hooks';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { updateQuiz, updateQuizErrors } from '../featues/quizSlice';
import { ChangeEvent } from 'react';

interface Props {
  title?: string;
  description?: string;
}

export const FormQuiz: React.FC<Props> = ({}) => {
  const { quiz } = useAppSelector(state => state.quiz);
  const dispatch = useAppDispatch();

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value;

    dispatch(
      updateQuizErrors({
        title: '',
      }),
    );

    dispatch(
      updateQuiz({
        title,
      }),
    );
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const description = event.target.value;

    dispatch(
      updateQuizErrors({
        description: '',
      }),
    );

    dispatch(
      updateQuiz({
        description,
      }),
    );
  };

  const handleQuizSubmit = () => {
    switch (true) {
      case !quiz.title:
        dispatch(
          updateQuizErrors({
            title: 'Title is required',
          }),
        );

      case !quiz.description:
        return dispatch(
          updateQuizErrors({
            description: 'Description is required',
          }),
        );

      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={handleQuizSubmit}
      className="flex max-w-2xl flex-col gap-4 rounded-md border-2 p-4"
    >
      <div className="flex flex-col gap-2">
        <h2>Name of new quize.</h2>

        <FormInput
          title="Title"
          value={quiz.title}
          onChange={handleChangeTitle}
          errorText={quiz.errors.title}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>Create description for the quize.</p>

        <FormTextarea
          description="Description"
          value={quiz.description}
          onChange={handleChangeDescription}
          errorText={quiz.errors.description}
        />
      </div>
    </form>
  );
};
