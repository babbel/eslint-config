// External Imports
import { h } from 'preact';

// Prop Types
interface SquareProps {
  onSquareClick: () => void;
  value: string;
}

// Component Definition
function Square({ onSquareClick, value }: SquareProps) {
  return (
    <button type="button" className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Module Export
export { Square };
