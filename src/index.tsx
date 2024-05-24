import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

createRoot(document.querySelector('body') as HTMLElement).render(<App />);
