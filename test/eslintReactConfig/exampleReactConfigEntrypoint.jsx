// Code based on this example: https://react.dev/learn/tutorial-tic-tac-toe#what-are-you-building

// External Imports
import { createRoot } from 'react-dom/client';
import React from 'react';

// Internal Imports
import { Game } from './components/Game.jsx';

// Render the Application
const reactRoot = createRoot(document.querySelector('#react-root'));
reactRoot.render(<Game />);
