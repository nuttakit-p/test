import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TitleHeader from '../components/Common/TitleHeader';
import QuizTestList from '../components/QuizTest';
import ForumProvider from '../contexts/ForumContext';

const QuizTestPage = () => {
  const { t } = useTranslation(['quiz']);
  return (
    <ForumProvider>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Grid item xs={12}>
            <TitleHeader title={t('title')} description={t('description')} />
          </Grid>
          <Grid item xs={12}>
            <QuizTestList />
          </Grid>
        </Stack>
      </Box>
    </ForumProvider>
  );
};

export default QuizTestPage;
