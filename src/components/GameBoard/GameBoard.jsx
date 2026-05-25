import GameCell from '../GameCell/GameCell';
import useGame from '../../hooks/useGame';
import { BoardArea, BoardGrid } from './GameBoard.styled';

const GameBoard = () => {
  const { state, dispatch, currentBoard, result } = useGame();

  const handleCellClick = (index) => {
    if (result) return;
    dispatch({ type: 'MAKE_MOVE', payload: { index } });
  };

  return (
    <BoardArea>
      <BoardGrid>
        {currentBoard.map((value, index) => (
          <GameCell
            key={index}
            value={value}
            index={index}
            onClick={handleCellClick}
            isWinning={state.winCombo.includes(index)}
            disabled={!!result || !!value}
          />
        ))}
      </BoardGrid>
    </BoardArea>
  );
};

export default GameBoard;
