import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.75rem;
  background-color: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const Logo = styled.h1`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.text};
  line-height: 1.2;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.surfaceAlt};
  border: 1.5px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.25s ease;
  color: ${({ theme }) => theme.text};

  &:hover {
    background: ${({ theme }) => theme.btnPrimary};
    border-color: ${({ theme }) => theme.btnPrimary};
    color: #fff;
    transform: rotate(18deg) scale(1.07);
  }

  &:active {
    transform: rotate(18deg) scale(0.97);
  }
`;
