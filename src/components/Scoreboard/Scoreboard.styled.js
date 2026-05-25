import styled from 'styled-components';

export const ScoreboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  flex-shrink: 0;
`;

export const ScoreBox = styled.div`
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 0.7rem 0.5rem;
  text-align: center;
  transition: background 0.3s ease, border-color 0.3s ease;
`;

export const ScoreLabel = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 4px;
`;

export const ScoreValue = styled.p`
  font-family: 'DM Mono', monospace;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  color: ${({ $player, theme }) =>
    $player === 'X' ? theme.playerX : $player === 'O' ? theme.playerO : theme.text};
`;
