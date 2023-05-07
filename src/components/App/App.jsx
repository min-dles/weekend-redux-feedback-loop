import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home.jsx';
import Review from '../Review/Review.jsx';
import Admin from '../Admin/Admin.jsx';
import RateFeeling from '../RateFeeling/RateFeeling.jsx';
import RateUnderstanding from '../RateUnderstanding/RateUnderstanding.jsx';
import RateSupport from '../RateSupport/RateSupport.jsx';
import Comments from '../Comments/Comments.jsx';

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
          <button><Link to="/feeling">CONTINUE</Link></button>
        </Route>

        <Route exact path="/feeling">
          <RateFeeling />
          <button><Link to="/understanding">CONTINUE</Link></button>
        </Route>

        <Route exact path="/understanding">
          <RateUnderstanding />
          <button><Link to="/support">CONTINUE</Link></button>
        </Route>

        <Route exact path="/support">
          <RateSupport />
        </Route>

        <Route exact path="/comments">
          <Comments />
          <button><Link to="/review">CONTINUE</Link></button>
        </Route>

        <Route exact path="/review">
          <Review />
          <button><Link to="/">SUBMIT</Link></button>
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>

      </Router>
    </div>
  );
}

export default App;
