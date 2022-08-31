import React from 'react';
import * as ReactDOM from 'react-dom';

const header = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log(header);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(header);
