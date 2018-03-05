import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery'

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
