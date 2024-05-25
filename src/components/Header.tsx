import { Link } from 'react-router-dom';
import { CreateQwizeLink } from './CreateQwizeLink';

export const Header = () => {
  return (
    <header
      className={`
        sticky inset-x-0 top-0 z-10 flex
        h-12 w-full items-center justify-around
      `}
    >
      <nav className="flex flex-1 items-center justify-around">
        <Link to="/" className="text-4xl font-extrabold">
          Quize
        </Link>

        <CreateQwizeLink />
      </nav>
    </header>
  );
};
