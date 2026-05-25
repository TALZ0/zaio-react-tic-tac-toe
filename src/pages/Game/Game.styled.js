import styled, { css } from 'styled-components';

export const PageWrapper = styled.main`
  flex: 1;
  min-height: 0;
  max-height: calc(100dvh - 3.25rem);
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0.875rem 1.25rem;

  @media (max-width: 768px) {
    max-height: none;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    align-items: flex-start;
  }
`;

export const GameLayout = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.25rem;
  width: 100%;
  max-width: 920px;
  min-height: 0;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    flex: none;
    overflow: visible;
    min-height: min-content;
  }
`;

export const GameSection = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: background-color 0.3s ease, border-color 0.3s ease;
  overflow: hidden;

  @media (min-width: 769px) {
    display: grid;
    grid-template-rows: auto auto minmax(0, 1fr) auto;
    align-content: stretch;
  }

  @media (max-width: 768px) {
    flex: none;
    flex-shrink: 0;
    overflow: visible;
    padding: 1rem 1.15rem;
    gap: 0.75rem;
  }
`;

export const HistorySection = styled.aside`
  flex-shrink: 0;
  width: 260px;
  min-height: 0;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 1rem 1.15rem;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: background-color 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    flex: none;
    flex-shrink: 0;
    min-height: 10rem;
    max-height: 14rem;
  }
`;

export const StatusBar = styled.div`
  flex-shrink: 0;
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.01em;
  transition: all 0.3s ease;

  ${({ $isWin }) =>
    $isWin &&
    css`
      background: rgba(80, 200, 120, 0.09);
      border-color: #50c878;
      color: #50c878;
      font-weight: 600;
    `}

  ${({ $isDraw }) =>
    $isDraw &&
    css`
      color: ${({ theme }) => theme.textMuted};
      font-style: italic;
    `}
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  flex-shrink: 0;

  @media (min-width: 769px) {
    justify-content: center;
  }
`;

