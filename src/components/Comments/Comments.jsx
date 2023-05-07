import { useHistory } from 'react-router-dom';

function Comments() {

    const history = useHistory();

    return (
        <div>
            <h3>Any comments you want to leave?</h3>
            <form>
                <label>Please write any comments you would like to share with our instructors below; this is optional.</label>
                <textarea rows="4" cols="50" placeholder="It is optional to provide commentary, but we would love to hear from you!"></textarea>
                <button onClick={() => { history.push('/review')}}>
                    CONTINUE
                </button>
            </form>
        </div>
    )
}

export default Comments;