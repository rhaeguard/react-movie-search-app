import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import '../src/assets/js/jquery-3.2.1.min.js';
import '../src/assets/css/bootstrap.min.css';
// import '../src/assets/js/bootstrap.min.js';
import App from './compnts/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();