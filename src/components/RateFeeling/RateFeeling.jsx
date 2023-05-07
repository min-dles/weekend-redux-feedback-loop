import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RateFeeling() {

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
                type: 'ADD_FEELING',
                payload: chooseRating
            })
            history.push('/understanding');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>How are you feeling today?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to your overall feeling of today.</p>

            <label>Choose a rating:</label>
            <select value={chooseRating} onChange={(event) => { setChooseRating(event.target.value) }}>
                <option value="">**Please choose an option**</option>
                <option value="1">1 - Not feeling good at all.</option>
                <option value="2">2 - Feeling less than okay.</option>
                <option value="3">3 - Feeling okay.</option>
                <option value="4">4 - Feeling fine; could be better.</option>
                <option value="5">5 - Feeling pretty good.</option>
                <option value="6">6 - Feeling great!</option>
            </select>
            <button className="continue">CONTINUE</button>
        </form>
    )
}

export default RateFeeling;