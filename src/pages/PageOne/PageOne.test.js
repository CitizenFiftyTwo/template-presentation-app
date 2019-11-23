import React from 'react';
import ReactDOM from 'react-dom';
import PageOne from './PageOne';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageOne />, div);
  ReactDOM.unmountComponentAtNode(div);
});
