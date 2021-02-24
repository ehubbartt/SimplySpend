import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Bills from './Bills';
import Suggestions from './Suggestions';
import Groceries from './Groceries';
import Tabs from './Tabs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bills" component={Bills} />
          <Route path="/suggestions" component={Suggestions} />
          <Route path="/groceries" component={Groceries} />
          <Route path="/tabs" component={Tabs} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className='main'>
    <h1 className='title'>Home Page</h1>
    <div className='bar'></div>
  </div>
);

export default App;