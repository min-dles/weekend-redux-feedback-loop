import { useSelector } from 'react-redux';

function Commentary() {
    
    const commentary = useSelector((store) => store.commentary);

    if (commentary != ""){

        return (
            <li>These are your additional comments: {commentary}</li>
        )
    }
}

export default Commentary;