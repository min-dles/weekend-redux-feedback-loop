import { useHistory } from 'react-router-dom';

function RateUnderstanding() {

    const history = useHistory();

    return (
        <div>
            <h3>How well are you understanding the content?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to your overall understanding.</p>

            <form>
                <label>Choose a rating:</label>
                <select defaultValue="3">
                    <option value="1">1 - At this time, I don't understand the material.</option>
                    <option value="2">2 - A couple things make sense, but I am mostly lost.</option>
                    <option value="3">3 - Overall confused but I get some concepts.</option>
                    <option value="4">4 - I'm starting to see how things are connected.</option>
                    <option value="5">5 - I feel adept with this material.</option>
                    <option value="6">6 - Very well; everything makes sense!</option>
                </select>

                <button onClick={() => { history.push('/support')}}>
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default RateUnderstanding;