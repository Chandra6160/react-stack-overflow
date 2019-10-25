import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Explore from "./components/Explore";
import {BrowserRouter, Route,Redirect} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Redirect to="/explore/interesting"/>
    <App />
    <Route path="/explore" component={Explore}/>
</BrowserRouter> , document.getElementById('root'));


