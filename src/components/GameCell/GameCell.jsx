import { StyledCell, Mark } from './GameCell.styled';

const GameCell = ({ value, index, onClick, isWinning, disabled }) => {
  const handleClick = () => {
    if (!disabled && !value) onClick(index);
  };

  return (
    <StyledCell
      onClick={handleClick}
      $isWinning={isWinning}
      disabled={disabled}
      aria-label={`Cell ${index + 1}: ${value || 'empty'}`}
    >
      {value && <Mark $player={value}>{value}</Mark>}
    </StyledCell>
  );
};

export default GameCell;
