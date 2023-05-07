import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {

    const [commentary, setCommentary] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const sendCommentary = (event) => {
        event.preventDefault();
        console.log('commentary:', commentary);

        dispatch({
            type: 'ADD_COMMENTARY',
            payload: commentary
        })
        history.push('/review');
    }

    return (
        <form onSubmit={sendCommentary}>
            <h3>Any comments you want to leave?</h3>
            <label>Please write any comments you would like to share with our instructors below; this is optional.</label>
            <textarea
                rows="4"
                cols="50"
                placeholder="It is optional to provide commentary, but we would love to hear from you!"
                value={commentary}
                onChange={(event) => { setCommentary(event.target.value) }}
            >
            </textarea>
            <button>CONTINUE</button>
        </form>
    )
}

export default Comments;