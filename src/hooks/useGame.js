import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used inside GameProvider');
  return context;
};

export default useGame;
