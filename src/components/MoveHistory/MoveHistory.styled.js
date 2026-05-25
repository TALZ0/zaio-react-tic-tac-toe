import styled, { css } from 'styled-components';

export const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
`;

export const HistoryTitle = styled.h3`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3px;
`;

export const HistorySubtitle = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 10px;
`;

export const HistoryList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 2px;
  }
`;

export const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.32rem 0.55rem;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.15s ease;

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          background: ${theme.winHighlight};
          border-color: ${theme.btnPrimary};
        `
      : css`
          &:hover {
            background: ${theme.historyHover};
          }
        `}
`;

export const MoveNumber = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
  color: ${({ theme }) => theme.textMuted};
  min-width: 14px;
  text-align: right;
`;

export const MoveLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text};
`;
