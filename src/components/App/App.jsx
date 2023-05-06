import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home.jsx';
import Review from '../Review/Review.jsx';
import Admin from '../Admin/Admin.jsx';
import RateFeeling from '../RateFeeling/RateFeeling.jsx';
import RateUnderstanding from '../RateUnderstanding/RateUnderstanding.jsx';

function App() {

  return (
    <div className='App'>
      <Router>  
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/feeling">
          <RateFeeling />
        </Route>
        <Route exact path="/understanding">
          <RateUnderstanding />
        </Route>
        <Route exact path="/support"></Route>
        <Route exact path="comments"></Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
