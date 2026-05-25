import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
  white-space: nowrap;

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background: ${theme.btnPrimary};
      color: #fff;
      border-color: ${theme.btnPrimary};
      &:hover:not(:disabled) {
        background: ${theme.btnPrimaryHover};
        border-color: ${theme.btnPrimaryHover};
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(91, 156, 246, 0.3);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'danger' &&
    css`
      background: transparent;
      color: ${theme.btnDanger};
      border-color: ${theme.btnDanger};
      &:hover:not(:disabled) {
        background: ${theme.btnDanger};
        color: #fff;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.25);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'ghost' &&
    css`
      background: transparent;
      color: ${theme.textMuted};
      border-color: ${theme.border};
      &:hover:not(:disabled) {
        color: ${theme.text};
        border-color: ${theme.textMuted};
        transform: translateY(-1px);
      }
    `}

  &:disabled {
    opacity: 0.38;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:active:not(:disabled) {
    transform: translateY(0) !important;
  }
`;
