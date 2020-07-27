import React from 'react';
import Header from "./Header";
import './App.css';
import Main from './Main';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main /> */}
      {/* <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/world' component={Main}/>
        <Route path='/schedule' component={Main}/>
        <Route path='/politics' component={Main}/>
        <Route path='/business' component={Main}/>
        <Route path='/science' component={Main}/>
        <Route path='/sports' component={Main}/>
        <Route path='/technology' component={Main}/>
        <Route path='/travel' component={Main}/>
        <Route path='/science' component={Main}/>
      </Switch> */}
    </div>
  );
}

export default App;
