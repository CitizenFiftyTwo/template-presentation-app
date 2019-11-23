import React from 'react';
import ReactDOM from 'react-dom';
import PageTwo from './PageTwo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageTwo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
