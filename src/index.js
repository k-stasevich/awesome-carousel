import React from 'react';
import ReactDOM from 'react-dom';
import Example1Component from './examples/example1';
import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(<Example1Component />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
