import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { useDocumentTitle } from 'usehooks-ts';
import { convertHyphenToSpace } from './helpers/functions';
import { webSiteName } from './helpers/variables';

export const App = () => {
  const { pathname } = useLocation();
  const lastPathName = pathname.split('/').pop();

  useDocumentTitle(convertHyphenToSpace(lastPathName || webSiteName));

  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};
