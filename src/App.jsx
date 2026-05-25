import { ThemeProvider } from './contexts/ThemeContext';
import { GameProvider } from './contexts/GameContext';
import Game from './pages/Game/Game';

const App = () => {
  return (
    <ThemeProvider>
      <GameProvider>
        <Game />
      </GameProvider>
    </ThemeProvider>
  );
};

export default App;
