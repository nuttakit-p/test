import { CircularProgress, Box, Typography, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CardCustom = styled(Card)`
  justify-content: center;
  text-align: center;
  padding: 30px 30px 20px 40px;
`;

const LoadingPage = () => {
  const { t } = useTranslation(['common']);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CardCustom>
        <CircularProgress size={60} />
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          {t('loading')}
        </Typography>
      </CardCustom>
    </Box>
  );
};

export default LoadingPage;
