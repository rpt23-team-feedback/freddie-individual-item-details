import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import exampleData from './exampleData';

ReactDOM.render(<App exampleData={exampleData}/>, document.getElementById('root'));