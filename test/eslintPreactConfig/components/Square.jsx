// External Imports
import { h } from 'preact';
import PropTypes from 'prop-types';

// Component Definition
function Square({ onSquareClick, value }) {
  return (
    <button type="button" className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Prop Types
Square.propTypes = {
  onSquareClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

// Module Export
export { Square };
