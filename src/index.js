import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// IMPORT REDUX: 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// RateFeeling:
const feelingFeedback = (state='', action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('redux action:', action, 'redux state:', state)
        return action.payload;
    }
    return state;
}

// RateUnderstanding:
const understandingFeedback = (state='', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

// RateSupport:
const supportFeedback = (state='', action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload;
    }
    return state;
}

// Comments:
const commentary = (state='', action) => {
    if (action.type === 'ADD_COMMENTARY') {
        return action.payload;
    }
    return state;
}

const theStore = createStore(
    combineReducers({
        feelingFeedback,
        understandingFeedback,
        supportFeedback,
        commentary
    }),
    applyMiddleware(
        logger
    )
)

// ADD PROVIDER AROUND APP: 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={theStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
