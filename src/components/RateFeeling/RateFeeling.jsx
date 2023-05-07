import { useDispatch } from 'react-redux';
import { useState } from 'react';

function RateFeeling() {

    const [chooseRating, setChooseRating] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('This was user\'s selection:', chooseRating);

        dispatch({
            type: 'ADD_FEELING',
            payload: chooseRating
        })
    }

    return (
        <div>
            <h3>How are you feeling today?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to your overall feeling of today.</p>

            <form onSubmit={handleSubmit}>
                <label>Choose a rating:</label>
                <select value={chooseRating} onChange={(event) => {setChooseRating(event.target.value)}}>
                    <option value="1">1 - Not feeling good at all.</option>
                    <option value="2">2 - Feeling less than okay.</option>
                    <option value="3">3 - Feeling okay.</option>
                    <option value="4">4 - Feeling fine; could be better.</option>
                    <option value="5">5 - Feeling pretty good.</option>
                    <option value="6">6 - Feeling great!</option>
                </select>
            </form>
        </div>
    )
}

export default RateFeeling;