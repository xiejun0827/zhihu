import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./asstes/reset.css"
import "./font_ol20cvo0zyb/iconfont.css"
// import "../node_modules/antd/dist/antd.css"
import '../node_modules/antd-mobile/dist/antd-mobile.css'
import {BrowserRouter} from "react-router-dom"
// react-addons-css-transition-group

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
