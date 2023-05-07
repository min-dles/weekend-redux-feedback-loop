import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function RateUnderstanding() {

    const [chooseRating, setChooseRating] = useState('');
    const dispatch = useDispatch();
    // const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('This was user\'s selection:', chooseRating);

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: chooseRating
        })
    }

    return (
        <div>
            <h3>How well are you understanding the content?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to your overall understanding.</p>

            <form onSubmit={handleSubmit}>
                <label>Choose a rating:</label>
                <select value={chooseRating} onChange={(event) => {setChooseRating(event.target.value)}}>
                    <option value="1">1 - At this time, I don't understand the material.</option>
                    <option value="2">2 - A couple things make sense, but I am mostly lost.</option>
                    <option value="3">3 - Overall confused but I get some concepts.</option>
                    <option value="4">4 - I'm starting to see how things are connected.</option>
                    <option value="5">5 - I feel adept with this material.</option>
                    <option value="6">6 - Very well; everything makes sense!</option>
                </select>
            </form>
        </div>
    )
}

export default RateUnderstanding;