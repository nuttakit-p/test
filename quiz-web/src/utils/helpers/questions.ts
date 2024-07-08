import { Question, Questions } from '../../types/questionsType';

export function getRandomQuestions(questions: Questions, count: number): Questions {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function shuffleAnswers(question: Question): Question {
  const shuffledAnswers = [...question.answers].sort(() => 0.5 - Math.random());
  return {
    ...question,
    answers: shuffledAnswers,
  };
}
