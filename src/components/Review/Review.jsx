import { useHistory } from 'react-router-dom';

function Review() {
    
    const history = useHistory();

    return (
        <div>
            <h2>This is the final review page.</h2>
            <button onClick={() => { history.push('/') }}>
                SUBMIT
            </button>
        </div>
    );
}

export default Review;