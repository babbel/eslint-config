// Code based on this example: https://react.dev/learn/tutorial-tic-tac-toe#what-are-you-building

// External Imports
import React from 'react';
import { createRoot } from 'react-dom/client';

// Internal Imports
import { Game } from './components/Game.tsx';

// Render the Application
const rootElement = document.querySelector('#react-root');
if (!rootElement) {
  throw new TypeError('React root element not found');
}
const reactRoot = createRoot(rootElement);
reactRoot.render(<Game />);
