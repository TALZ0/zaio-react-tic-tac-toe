import useGame from '../../hooks/useGame';
import {
  HistoryWrapper,
  HistoryTitle,
  HistorySubtitle,
  HistoryList,
  HistoryItem,
  MoveNumber,
  MoveLabel,
} from './MoveHistory.styled';

const getMoveDescription = (history, index) => {
  if (index === 0) return 'Game start';
  const currentBoard = history[index].board;
  const prevBoard = history[index - 1].board;
  const cellIndex = currentBoard.findIndex((cell, i) => cell !== null && prevBoard[i] === null);
  const player = (index - 1) % 2 === 0 ? 'X' : 'O';
  const row = Math.floor(cellIndex / 3) + 1;
  const col = (cellIndex % 3) + 1;
  return `${player}  ·  Row ${row}, Col ${col}`;
};

const MoveHistory = () => {
  const { state, dispatch } = useGame();
  const { history, step } = state;

  const handleJump = (toStep) => {
    dispatch({ type: 'JUMP_TO', payload: { step: toStep } });
  };

  return (
    <HistoryWrapper>
      <HistoryTitle>Move History</HistoryTitle>
      <HistorySubtitle>Click any move to jump back to that board state</HistorySubtitle>
      <HistoryList>
        {history.map((entry, index) => (
          <HistoryItem
            key={index}
            $isActive={index === step}
            onClick={() => handleJump(index)}
          >
            <MoveNumber>{index}</MoveNumber>
            <MoveLabel>{getMoveDescription(history, index)}</MoveLabel>
          </HistoryItem>
        ))}
      </HistoryList>
    </HistoryWrapper>
  );
};

export default MoveHistory;
