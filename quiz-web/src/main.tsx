import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import './styles/main.less';
import { I18nextProvider } from 'react-i18next';
import LoadingPage from './components/Common/LoadingPage';
import { ThemeProvider } from '@mui/material/styles';
import { i18n, theme } from './configs';
import MenuProvider from './contexts/MenuContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<LoadingPage />}>
          <MenuProvider>
            <RouterProvider router={Router} />
          </MenuProvider>
        </Suspense>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
