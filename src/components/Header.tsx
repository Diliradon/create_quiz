import { Link, NavLink } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

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

        <NavLink
          to="new-quiz"
          className={({ isActive }) =>
            twJoin(
              `rounded-md border-2 p-2 transition
               hover:bg-black hover:text-white`,
              isActive && 'hidden',
            )
          }
        >
          Create new quiz
        </NavLink>
      </nav>
    </header>
  );
};
