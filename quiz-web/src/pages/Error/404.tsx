import { Button, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import env from '../../configs/env';

const Error404Page = () => {
  const { t } = useTranslation(['common']);
  const goHome = () => {
    window.location.href = `${env.URL_BDMS}`;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Button color="primary" onClick={() => goHome()}>
            {t('home')}
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Error404Page;
