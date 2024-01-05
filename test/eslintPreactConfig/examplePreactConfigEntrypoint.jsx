// Code based on this example: https://react.dev/learn/tutorial-tic-tac-toe#what-are-you-building

// External Imports
import { h, render } from 'preact';

// Internal Imports
import { Game } from './components/Game.jsx';

// Render the Application
render(document.querySelector('#preact-root'), <Game />)
