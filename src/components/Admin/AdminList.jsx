import { useSelector } from 'react-redux';
import Admin from './Admin.jsx';

function AdminList() {
    
    const feedbackList = useSelector((store) => store.feedbackList);

    return (
        <div>
            {
                feedbackList.map((feedback) => {
                    return (
                        <Admin key={feedback.id} feedback={feedback} />
                    )
                })
            }
        </div>
    )
}

export default AdminList;