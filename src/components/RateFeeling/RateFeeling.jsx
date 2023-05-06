import { useHistory } from 'react-router-dom';

function RateFeeling() {

    const history = useHistory();

    return (
        <div>
            <h3>How are you feeling today?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to your overall feeling of today.</p>

            <form>
                <label>Choose a rating:</label>
                <select defaultValue="3">
                    <option value="1">1 - Not feeling good at all.</option>
                    <option value="2">2 - Feeling less than okay.</option>
                    <option value="3">3 - Feeling okay.</option>
                    <option value="4">4 - Feeling fine; could be better.</option>
                    <option value="5">5 - Feeling pretty good.</option>
                    <option value="6">6 - Feeling great!</option>
                </select>

                <button onClick={() => { history.push('/understanding')}}>
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default RateFeeling;