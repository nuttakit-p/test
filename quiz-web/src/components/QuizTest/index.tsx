import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import questions from '../../constant/questions.ts';
import { Question as QuestionType, Score } from '../../types/questionsType';
import { getRandomQuestions } from '../../utils/helpers/questions';
import LeaderBoard from './LeaderBoard.tsx';
import Question from './Question';
const questionsData = questions;

const PostsList: React.FC = () => {
  const { t } = useTranslation(['common', 'quiz']);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const questionsList = currentLanguage === 'th' ? questionsData.th : questionsData.en;

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState<Score[]>([]);

  useEffect(() => {
    setQuestions(getRandomQuestions(questionsList, 20));
  }, [currentLanguage, questionsList]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const name = prompt('คุณชื่ออะไร?') || 'Anonymous';
    const newScore: Score = { name, score };
    const updatedLeaderBoard = [...leaderBoard, newScore].sort((a, b) => b.score - a.score).slice(0, 10);
    setLeaderBoard(updatedLeaderBoard);
    setShowLeaderBoard(true);
    localStorage.setItem('leaderBoard', JSON.stringify(updatedLeaderBoard));
  };

  const restartQuiz = () => {
    setQuestions(getRandomQuestions(questionsList, 20));
    setCurrentQuestion(0);
    setScore(0);
    setShowLeaderBoard(false);
  };

  useEffect(() => {
    const savedLeaderBoard = localStorage.getItem('leaderBoard');
    if (savedLeaderBoard) {
      setLeaderBoard(JSON.parse(savedLeaderBoard));
    }
  }, []);

  if (questions.length === 0) {
    return <div>กำลังโหลด...</div>;
  }

  if (showLeaderBoard) {
    return (
      <div>
        <LeaderBoard scores={leaderBoard} restartQuiz={restartQuiz} />
      </div>
    );
  }

  return (
    <div>
      <Question currentQuestion={currentQuestion + 1} question={questions[currentQuestion]} onAnswer={handleAnswer} />
      <p>
        {t('quiz:question_of', {
          current_number: currentQuestion + 1,
          end_number: questions.length,
        })}
      </p>
    </div>
  );
};

export default PostsList;
