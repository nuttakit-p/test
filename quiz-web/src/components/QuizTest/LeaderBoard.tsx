import { Box, Button, Card, CardContent, Divider } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Score } from '../../types/questionsType';
import LeaderList from '../Common/LeaderList';
import Winner from '../Common/Winner';

interface Props {
  scores: Score[];
  restartQuiz: () => void;
}

const LeaderBoard: React.FC<Props> = ({ scores, restartQuiz }) => {
  const { t } = useTranslation(['common', 'quiz']);
  const sortData = scores.sort((a, b) => b.score - a.score);

  localStorage.setItem('leaderboard', JSON.stringify(sortData));

  return (
    <div>
      <Winner name={sortData[0].name} score={sortData[0].score} />
      <Card className="forum-list-item" sx={{ display: 'flex', marginTop: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            {t('common:leaderboard')}
            <Divider style={{ color: '#000', margin: '20px 0px' }} />
            <LeaderList scores={sortData} />
            <Button variant="contained" onClick={restartQuiz}>
              {t('common:btn_again')}
            </Button>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default LeaderBoard;
