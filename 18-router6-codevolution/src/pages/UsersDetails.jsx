import { useParams } from 'react-router-dom';

const UsersDetails = () => {
    
    const params = useParams();

    return (
        <>
            <h2>User {params.userId} Details</h2>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt exercitationem quia magni saepe magnam non eum
                mollitia! Similique quos quisquam ipsam illo ipsum nemo,
                distinctio minus ipsa amet ratione praesentium!
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt exercitationem quia magni saepe magnam non eum
                mollitia! Similique quos quisquam ipsam illo ipsum nemo,
                distinctio minus ipsa amet ratione praesentium!
            </p>
        </>
    );
};

export default UsersDetails;
