import { Box, Card, Grid } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface Props {
  name: string;
  score: number;
}

const NameText = styled.h1`
  font-size: 56px;
  font-weight: 900;
  color: ${orange[800]};
`;

const ScoreText = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: ${grey[600]};
`;

const ScoreBox = styled(Box)`
  background-color: ${grey[200]};
  padding: 20px 40px;
  border-radius: 20px;
`;

const Winner = ({ name, score }: Props) => {
  const { t } = useTranslation(['common', 'quiz']);

  return (
    <Card className="forum-list-item" sx={{ display: 'flex' }}>
      <Grid
        container
        spacing={4}
        sx={{
          padding: 2,
          flex: '2 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <img width={200} src="images/winner.png" alt="logo" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ScoreBox>
            <NameText>{name || '----'}</NameText>
            <ScoreText>
              {t('common:score')} : {score || '--'}
            </ScoreText>
          </ScoreBox>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Winner;
