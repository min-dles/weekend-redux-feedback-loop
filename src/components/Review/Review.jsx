import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Commentary from './Commentary.jsx';
import axios from 'axios';

function Review() {
    
    const history = useHistory();
    const feeling = useSelector((store) => store.feelingFeedback);
    const understanding = useSelector((store) => store.understandingFeedback);
    const support = useSelector((store) => store.supportFeedback);
    const commentary = useSelector((store) => store.commentary);

    const sendFeedback = () => {
        const data = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: commentary
        }
        console.log('This is your feedback:', data);
        
        axios({
            method: 'POST',
            url: '/feedback/review',
            data: data
        }).then((response) => {
            console.log('Your axios call went thru:', response);
            history.push('/');
        }).catch((error) => {
            console.log('Oh no there was an error:', error);
        })
    }

    return (
        <div>
            <h2>This is the final review page.</h2>
            <ul>
                <li>On a scale of 1 to 6, this is how you said you are feeling: {feeling}</li>
                <li>This is how you rated your current understanding: {understanding}</li>
                <li>This is how you rated support: {support}</li>
                <Commentary />
            </ul>

            <button onClick={sendFeedback}>
                SUBMIT
            </button>
        </div>
    );
}

export default Review;