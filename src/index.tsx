import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageContextProvider } from './contexts/LanguageContext';

import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
);
