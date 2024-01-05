// Code based on this example: https://react.dev/learn/tutorial-tic-tac-toe#what-are-you-building

// External Imports
import { h, render } from 'preact';

// Internal Imports
import { Game } from './components/Game.tsx';

// Render the Application
const rootElement = document.querySelector('#preact-root');
if (!rootElement) {
  throw new TypeError('Preact root element not found');
}
render(<Game />, rootElement);
