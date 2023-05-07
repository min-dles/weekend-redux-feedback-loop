import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Success() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: ''
        });
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: ''
        });
        dispatch({
            type: 'ADD_SUPPORT',
            payload:''
        });
        dispatch({
            type: 'ADD_COMMENTARY',
            payload: ''
        });

        history.push('/');
    }    

    return (
        <>
            <h1>Thank you!</h1>
            <p>We appreciate your feedback. 
                Please enjoy this picture of a cute dog as a token 
                of our gratitude.
            </p>
            <img src="/images/cutie-confirmation.jpeg" />
            <p>Retake survey?</p>
            <button className="success" onClick={handleClick}>🔁</button>
        </>
    )
}

export default Success;