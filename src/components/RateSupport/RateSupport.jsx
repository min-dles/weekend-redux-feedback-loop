import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RateSupport() {

    const [chooseRating, setChooseRating] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('This was user\'s selection:', chooseRating);
        if (chooseRating === "") {
            alert('Please choose a rating');
        } else {
            dispatch({
                type: 'ADD_SUPPORT',
                payload: chooseRating
            })
            history.push('/comments');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>How well are you being supported?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to the overall level of support.</p>

            <label>Choose a rating:</label>
            <select value={chooseRating} onChange={(event) => { setChooseRating(event.target.value) }}>
                <option value="">**Please choose an option**</option>
                <option value="1">1 - I don't feel supported.</option>
                <option value="2">2 - I can ask a question occasionally.</option>
                <option value="3">3 - Support is somewhat available to me.</option>
                <option value="4">4 - There is a decent level of support available.</option>
                <option value="5">5 - Overall, I feel supported in my learning.</option>
                <option value="6">6 - I feel very supported at this time!</option>
            </select>
            <button className="continue">CONTINUE</button>
        </form>
    )
}

export default RateSupport;