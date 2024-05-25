import { Route, Routes, HashRouter } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NewQuizePage } from './pages/NewQuizePage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="new-quize" element={<NewQuizePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
