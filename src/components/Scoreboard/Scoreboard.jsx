import useGame from '../../hooks/useGame';
import {
  ScoreboardWrapper,
  ScoreBox,
  ScoreLabel,
  ScoreValue,
} from './Scoreboard.styled';

const Scoreboard = () => {
  const { state } = useGame();
  const { scores } = state;

  return (
    <ScoreboardWrapper>
      <ScoreBox>
        <ScoreLabel>Player X</ScoreLabel>
        <ScoreValue $player="X">{scores.X}</ScoreValue>
      </ScoreBox>
      <ScoreBox>
        <ScoreLabel>Draws</ScoreLabel>
        <ScoreValue>{scores.draws}</ScoreValue>
      </ScoreBox>
      <ScoreBox>
        <ScoreLabel>Player O</ScoreLabel>
        <ScoreValue $player="O">{scores.O}</ScoreValue>
      </ScoreBox>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
