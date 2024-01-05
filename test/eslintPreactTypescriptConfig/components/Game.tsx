// External Imports
import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

// Internal Imports
import { Board } from './Board.tsx';

// Component Definition
function Game() {
  // eslint-disable-next-line unicorn/no-null -- the game expects explicit null values
  const [history, setHistory] = useState([Array.from({ length: 9 }).fill(null) as string[]]);
  const [currentMove, setCurrentMove] = useState(0);
  const handlePlay = useCallback(
    (nextSquares: string[]) => {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    },
    [currentMove, history],
  );

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]!;

  const moves = history.map((_squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
    return (
      // eslint-disable-next-line react/no-array-index-key -- this is the best unique value
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Module Exports
export { Game };
