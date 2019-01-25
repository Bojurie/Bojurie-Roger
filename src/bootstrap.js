import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f =>f)(createStore)));


import './style/main.scss';

import history from './history';

import Home from './components/home';
import About from './components/about';
import Skill from './components/Skill';
import Portfolio from './components/portfolio';
import Contact from './components/contact'


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Home>
          <Switch>
            {/* <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/skill' exact component={Skill}/>
            <Route path='/portfolio' exact component={Portfolio}/>
            <Route path='/contact' exact component={Contact}/> */}
            
          </Switch>
        </Home>
      </Router>

    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
