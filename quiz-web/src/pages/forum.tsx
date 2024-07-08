import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TitleHeader from '../components/Common/TitleHeader';
import PostsList from '../components/Forum/PostsList';
import ForumProvider from '../contexts/ForumContext';
import { time } from '../utils';

const ForumPage = () => {
  const { t } = useTranslation(['forum']);

  return (
    <ForumProvider>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Grid item xs={12}>
            <TitleHeader title={t('title')} description={<>{t('description', { timezone: time.timeZoneText() })}</>} />
          </Grid>
          <Grid item xs={12}>
            <PostsList />
          </Grid>
        </Stack>
      </Box>
    </ForumProvider>
  );
};

export default ForumPage;
