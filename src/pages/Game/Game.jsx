import Header from '../../components/Header/Header';
import Scoreboard from '../../components/Scoreboard/Scoreboard';
import GameBoard from '../../components/GameBoard/GameBoard';
import MoveHistory from '../../components/MoveHistory/MoveHistory';
import Button from '../../components/Button/Button';
import useGame from '../../hooks/useGame';
import {
  PageWrapper,
  GameLayout,
  GameSection,
  HistorySection,
  StatusBar,
  ActionsRow,
} from './Game.styled';

const Game = () => {
  const { state, dispatch, result } = useGame();
  const { currentPlayer } = state;

  const getStatusText = () => {
    if (!result) return `${currentPlayer === 'X' ? 'Player X' : 'Player O'}'s turn  (${currentPlayer})`;
    if (result.winner === 'draw') return "It's a draw!";
    return `${result.winner === 'X' ? 'Player X' : 'Player O'} wins!`;
  };

  const isWin = !!result && result.winner !== 'draw';
  const isDraw = result?.winner === 'draw';

  return (
    <>
      <Header />
      <PageWrapper>
        <GameLayout>
          <GameSection>
            <Scoreboard />

            <StatusBar $isWin={isWin} $isDraw={isDraw}>
              {getStatusText()}
            </StatusBar>

            <GameBoard />

            <ActionsRow>
              <Button variant="primary" onClick={() => dispatch({ type: 'NEW_GAME' })}>
                New game
              </Button>
              <Button
                variant="ghost"
                onClick={() => dispatch({ type: 'UNDO' })}
                disabled={state.step === 0}
              >
                Undo
              </Button>
              <Button variant="danger" onClick={() => dispatch({ type: 'RESET_SCORES' })}>
                Reset scores
              </Button>
            </ActionsRow>
          </GameSection>

          <HistorySection>
            <MoveHistory />
          </HistorySection>
        </GameLayout>
      </PageWrapper>
    </>
  );
};

export default Game;
