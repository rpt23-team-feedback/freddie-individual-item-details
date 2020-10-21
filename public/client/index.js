import React from 'react';
import ReactDOM from 'react-dom';
import Games from './components/Games.js';
import exampleData from './exampleData';

ReactDOM.render(<Games exampleData={exampleData}/>, document.getElementById('individual-items'));
