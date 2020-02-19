import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(

<BrowserRouter>
<center> <App/></center> 
</BrowserRouter> ,
document.getElementById('root')
);
serviceWorker.unregister();
