import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function RateSupport() {

    const [chooseRating, setChooseRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('This was user\'s selection:', chooseRating);

        dispatch({
            type: 'ADD_SUPPORT',
            payload: chooseRating
        })
    }

    return (
        <div>
            <h3>How well are you being supported?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to the overall level of support.</p>

            <form onSubmit={handleSubmit}>
                <label>Choose a rating:</label>
                <select value={chooseRating} onChange={(event) => {setChooseRating(event.target.value)}}>
                    <option value="1">1 - I don't feel supported.</option>
                    <option value="2">2 - I can ask a question occasionally.</option>
                    <option value="3">3 - Support is somewhat available to me.</option>
                    <option value="4">4 - There is a decent level of support available.</option>
                    <option value="5">5 - Overall, I feel supported in my learning.</option>
                    <option value="6">6 - I feel very supported at this time!</option>
                </select>
            </form>
        </div>
    )
}

export default RateSupport;