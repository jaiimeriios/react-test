import { Link } from "react-router-dom";
import { IoArrowBackOutline } from 'react-icons/io5';

function About() {

    return (
        <div className="about">
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam corrupti ratione voluptatem! Quas temporibus laudantium harum aliquam tempore recusandae magni deleniti libero ullam ipsam possimus, id, est numquam doloremque!</p>
            <Link to="./">
                <IoArrowBackOutline />Go Back
            </Link>
            
        </div>
    );
}

export default About;
