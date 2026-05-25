import { createContext, useReducer } from 'react';
import { checkWinner, createInitialBoard } from '../utils/GameUtils';

export const GameContext = createContext();

const createInitialState = () => ({
  history: [{ board: createInitialBoard() }],
  step: 0,
  currentPlayer: 'X',
  scores: { X: 0, O: 0, draws: 0 },
  winCombo: [],
});

function gameReducer(state, action) {
  switch (action.type) {
    case 'MAKE_MOVE': {
      const { index } = action.payload;
      const slicedHistory = state.history.slice(0, state.step + 1);
      const currentBoard = [...slicedHistory[slicedHistory.length - 1].board];

      if (currentBoard[index] || state.winCombo.length > 0) return state;

      currentBoard[index] = state.currentPlayer;
      const result = checkWinner(currentBoard);
      const newHistory = [...slicedHistory, { board: currentBoard }];
      const newScores = { ...state.scores };
      let newWinCombo = [];

      if (result) {
        if (result.winner === 'draw') newScores.draws += 1;
        else {
          newScores[result.winner] += 1;
          newWinCombo = result.combo;
        }
      }

      return {
        ...state,
        history: newHistory,
        step: newHistory.length - 1,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        scores: newScores,
        winCombo: newWinCombo,
      };
    }

    case 'UNDO': {
      if (state.step === 0) return state;

      const currentBoard = state.history[state.step].board;
      const currentResult = checkWinner(currentBoard);
      const newScores = { ...state.scores };

      if (currentResult) {
        if (currentResult.winner === 'draw') {
          newScores.draws = Math.max(0, newScores.draws - 1);
        } else {
          newScores[currentResult.winner] = Math.max(0, newScores[currentResult.winner] - 1);
        }
      }

      const newStep = state.step - 1;
      const boardAtNewStep = state.history[newStep].board;
      const resultAtNewStep = checkWinner(boardAtNewStep);

      return {
        ...state,
        step: newStep,
        currentPlayer: newStep % 2 === 0 ? 'X' : 'O',
        scores: newScores,
        winCombo: resultAtNewStep?.combo || [],
      };
    }

    case 'JUMP_TO': {
      const { step } = action.payload;
      const board = state.history[step].board;
      const result = checkWinner(board);
    
      const newScores = { X: 0, O: 0, draws: 0 };
      for (let i = 1; i <= step; i++) {
        const r = checkWinner(state.history[i].board);
        const prev = checkWinner(state.history[i - 1].board);
        if (r && !prev) {
          if (r.winner === 'draw') newScores.draws += 1;
          else newScores[r.winner] += 1;
        }
      }
    
      return {
        ...state,
        step,
        currentPlayer: step % 2 === 0 ? 'X' : 'O',
        winCombo: result?.combo || [],
        scores: newScores,
      };
    }

    case 'NEW_GAME': {
      return {
        ...state,
        history: [{ board: createInitialBoard() }],
        step: 0,
        currentPlayer: 'X',
        winCombo: [],
      };
    }

    case 'RESET_SCORES': {
      return createInitialState();
    }

    default:
      return state;
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState);
  const currentBoard = state.history[state.step].board;
  const result = checkWinner(currentBoard);

  return (
    <GameContext.Provider value={{ state, dispatch, currentBoard, result }}>
      {children}
    </GameContext.Provider>
  );
};
