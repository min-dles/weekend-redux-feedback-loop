import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

// Import all the components: 
import Home from '../Home/Home.jsx';
import RateFeeling from '../RateFeeling/RateFeeling.jsx';
import RateUnderstanding from '../RateUnderstanding/RateUnderstanding.jsx';
import RateSupport from '../RateSupport/RateSupport.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Review/Success.jsx';
import Admin from '../Admin/Admin.jsx';

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

        <Route exact path="/support">
          <RateSupport />
        </Route>

        <Route exact path="/comments">
          <Comments />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>

      </Router>
    </div>
  );
}

export default App;
