import { useHistory } from 'react-router-dom';

function RateSupport() {

    const history = useHistory();

    return (
        <div>
            <h3>How well are you being supported?</h3>
            <p>Using the dropdown list below, choose the option that best corresponds to the overall level of support.</p>

            <form>
                <label>Choose a rating:</label>
                <select defaultValue="3">
                    <option value="1">1 - I don't feel supported.</option>
                    <option value="2">2 - I can ask a question occasionally.</option>
                    <option value="3">3 - Support is somewhat available to me.</option>
                    <option value="4">4 - There is a decent level of support available.</option>
                    <option value="5">5 - Overall, I feel supported in my learning.</option>
                    <option value="6">6 - I feel very supported at this time!</option>
                </select>

                <button onClick={() => { history.push('/comments')}}>
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default RateSupport;