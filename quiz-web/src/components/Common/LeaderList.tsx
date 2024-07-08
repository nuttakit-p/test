import { Score } from '../../types/questionsType';

interface Props {
  scores: Score[];
}

const LeaderList = ({ scores }: Props) => {
  return (
    <ol>
      {scores.map((score, index) => (
        <li key={index}>
          {score.name}: {score.score}
        </li>
      ))}
    </ol>
  );
};

export default LeaderList;
