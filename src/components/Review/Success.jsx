import { useHistory } from 'react-router-dom';

function Success() {

    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
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
            <button onClick={handleClick}>🔁</button>
        </>
    )
}

export default Success;