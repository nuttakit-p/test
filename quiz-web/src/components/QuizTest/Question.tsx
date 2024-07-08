// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { Avatar, Box, Button, Card, CardContent, Divider, Grid } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { Answer, Question as QuestionType } from '../../types/questionsType';
import { shuffleAnswers } from '../../utils/helpers/questions';

interface Props {
  currentQuestion: number;
  question: QuestionType;
  onAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<Props> = ({ currentQuestion, question, onAnswer }) => {
  const [shuffledQuestion, setShuffledQuestion] = useState<QuestionType>(question);

  useEffect(() => {
    setShuffledQuestion(shuffleAnswers(question));
  }, [question]);

  const handleAnswer = (answerId: number) => {
    onAnswer(answerId === shuffledQuestion.correctAnswerId);
  };

  return (
    <Card className="forum-list-item" sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Grid container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item>
              <Avatar sx={{ bgcolor: blueGrey[300] }}>{currentQuestion}</Avatar>
            </Grid>
            <Grid item>
              <h4>{shuffledQuestion.text}</h4>
            </Grid>
          </Grid>
          <Divider style={{ color: '#000', margin: '20px 0px' }} />
          {shuffledQuestion.answers.map((answer: Answer) => (
            <Grid
              container
              spacing={1}
              sx={{ display: 'flex', alignItems: 'center' }}
              key={`question-${answer.id}-${answer.text}`}
            >
              <Button
                variant="text"
                onClick={() => handleAnswer(answer.id)}
                startIcon={<RadioButtonUncheckedIcon color="primary" />}
                style={{ textTransform: 'none' }}
              >
                {/* <Grid item>
                  <IconButton aria-label="add to shopping cart" color="secondary">
                  <RadioButtonUncheckedIcon color="primary" />
                  </IconButton>
                </Grid> */}
                <Grid item>
                  <span>{answer.text}</span>
                </Grid>
              </Button>
            </Grid>
          ))}
        </CardContent>
      </Box>
    </Card>
  );
};

export default Question;
