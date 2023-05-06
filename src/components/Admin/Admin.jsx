import { useEffect } from 'react';
import axios from 'axios';

function Admin(props) {

    useEffect(() => {
        fetchFeedbackData();
    }, [])

    const fetchFeedbackData = () => {
        axios({
            method: 'GET',
            url: '/feedback/admin'
        }).then((response) => {
            const theFeedback = response.data;
            console.log('GET call details:', theFeedback);
        }).catch((error) => {
            console.log('Error with GET axios call:', error);
        })
    }

    return (
        <div>
            <h2>Admin Page</h2>
            <p>Review feedback collected below</p>
            <table>
                <thead>
                    <tr>
                        <th>Feeling:</th>
                        <th>Understanding:</th>
                        <th>Support Rating:</th>
                        <th>Comments:</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{props.feedback.feeling}</td> */}
                        <td>TEST</td>
                        <td>3</td>
                        <td>3</td>
                        <td>Comments placeholder</td>
                        <td><button>❌</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Admin;