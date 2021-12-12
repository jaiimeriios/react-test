import { useParams } from 'react-router-dom';

function UserPage() {

    const params = useParams()
    console.log(params)

    return (
        <div>
            <h2>User {params.id} </h2>
        </div>
    );
}

export default UserPage;
