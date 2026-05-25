import useTheme from '../../hooks/useTheme';
import { StyledHeader, Logo, Nav, ThemeToggle } from './Header.styled';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <Logo>TicTacToe</Logo>
      <Nav>
        <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme" title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
          {isDark ? '☀' : '☽'}
        </ThemeToggle>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
