import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// IMPORT REDUX: 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// ADD REDUCER(S):
const feedback = (state={}, action) => {
    if (action.type === 'ADD_FEEDBACK') {
        const feedbackSubmission = action.payload;

        const copyOfState = [...state];
        copyOfState.push(feedbackSubmission);
        return copyOfState;
    }

    return state;
}

// RateFeeling:
const feelingFeedback = (state={}, action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('redux action:', action, 'redux state:', state)
        return state;
    }
    return state;
}

const theStore = createStore(
    combineReducers({
        feedback,
        feelingFeedback
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
