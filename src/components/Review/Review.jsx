import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Review() {
    
    const history = useHistory();
    const feedback = useSelector((store) => store.feedback);

    return (
        <div>
            <h2>This is the final review page.</h2>
            <p>{feedback.id}</p>
            <p>{feedback.feelingFeedback}</p>
            <p>{feedback.understandingFeedback}</p>
            {/* {
                feedback.map((feedbackReview) => {
                    return(
                        <p>{feedbackReview.id}, {feedbackReview}</p>
                    )
                })
            } */}
            <button onClick={() => { history.push('/') }}>
                SUBMIT
            </button>
        </div>
    );
}

export default Review;