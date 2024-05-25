import { Link } from 'react-router-dom';

export const CreateQwizeLink = () => {
  return (
    <Link
      to="new-quize"
      className={`
        hover:bg-black rounded-md border-2
          p-2 transition hover:text-white
        `}
    >
      Create new quize
    </Link>
  );
};
