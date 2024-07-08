import { Box, Card, CardContent, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LeaderList from '../components/Common/LeaderList';
import TitleHeader from '../components/Common/TitleHeader';
import Winner from '../components/Common/Winner';
import ForumProvider from '../contexts/ForumContext';
import { Score } from '../types/questionsType';
const LeaderBoardPage = () => {
  const { t } = useTranslation(['common', 'quiz', 'leaderboard']);
  const [scores, setScores] = useState<Score[]>([]);
  const loadFromLocalStorage = () => {
    const storedLeaderboard = localStorage.getItem('leaderboard');
    return storedLeaderboard ? JSON.parse(storedLeaderboard) : [];
  };

  useEffect(() => {
    const loadedLeaderboard = loadFromLocalStorage();
    setScores(loadedLeaderboard);
  }, []);
  return (
    <ForumProvider>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Grid item xs={12}>
            <TitleHeader title={t('leaderboard:title')} description={t('leaderboard:description')} />
          </Grid>
          <Grid item xs={12}>
            <Winner name={scores[0]?.name} score={scores[0]?.score} />
          </Grid>
          {scores.length > 0 && (
            <Grid item xs={12}>
              <Card className="forum-list-item" sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    {t('common:leaderboard')}
                    <LeaderList scores={scores} />
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          )}
        </Stack>
      </Box>
    </ForumProvider>
  );
};

export default LeaderBoardPage;
