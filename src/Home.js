import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Categories from './Categories';
import './App.css';

export default class Home extends React.Component {
  render() {    
    return (
      <div className="App">
        <HashRouter>
            <Switch>
              <Route path='/' component={App} exact/>
              <Route path='/business' component={Categories} />
              <Route path='/entertainment' component={Categories} />
              <Route path='/general' component={Categories} />
              <Route path='/health' component={Categories} />
              <Route path='/science' component={Categories} />
              <Route path='/sports' component={Categories} />
              <Route path='/technology' component={Categories} />
            </Switch>
        </HashRouter>
      </div>
    );
  }
}