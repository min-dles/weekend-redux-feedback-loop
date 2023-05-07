import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RateUnderstanding() {

    const [chooseRating, setChooseRating] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('This was user\'s selection:', chooseRating);
        if (chooseRating === "") {
            alert('Please choose a rating');
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: chooseRating
            })
            history.push('/support');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>How well are you understanding the content?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to your overall understanding.</p>

            <label>Choose a rating:</label>
            <select value={chooseRating} onChange={(event) => { setChooseRating(event.target.value) }}>
                <option value="">**Please choose an option**</option>
                <option value="1">1 - At this time, I don't understand the material.</option>
                <option value="2">2 - A couple things make sense, but I am mostly lost.</option>
                <option value="3">3 - Overall confused but I get some concepts.</option>
                <option value="4">4 - I'm starting to see how things are connected.</option>
                <option value="5">5 - I feel adept with this material.</option>
                <option value="6">6 - Very well; everything makes sense!</option>
            </select>
            <button>CONTINUE</button>
        </form>
    )
}

export default RateUnderstanding;