import styled, { css, keyframes } from 'styled-components';

const popIn = keyframes`
  0%   { transform: scale(0.3) rotate(-15deg); opacity: 0; }
  65%  { transform: scale(1.18) rotate(4deg); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const winPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(91, 156, 246, 0.45); }
  50%       { box-shadow: 0 0 0 7px rgba(91, 156, 246, 0); }
`;

export const StyledCell = styled.button`
  background: ${({ theme, $isWinning }) =>
    $isWinning ? theme.winHighlight : theme.surfaceAlt};
  border: 1.5px solid
    ${({ theme, $isWinning }) =>
      $isWinning ? theme.btnPrimary : theme.border};
  border-radius: 12px;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;

  ${({ $isWinning }) =>
    $isWinning &&
    css`
      animation: ${winPulse} 1.4s ease infinite;
    `}

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.textMuted};
    transform: scale(1.04);
  }

  &:active:not(:disabled) {
    transform: scale(0.96);
  }

  &:disabled {
    cursor: default;
  }
`;

export const Mark = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: clamp(1.5rem, 22vw, 2.75rem);

  @media (min-width: 769px) {
    font-size: calc(100cqw / 4.5);
  }

  font-weight: 500;
  color: ${({ $player, theme }) =>
    $player === 'X' ? theme.playerX : theme.playerO};
  animation: ${popIn} 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  user-select: none;
  line-height: 1;
`;
