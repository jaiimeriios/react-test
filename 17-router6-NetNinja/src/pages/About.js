import { Route, Routes, useNavigate, Link } from 'react-router-dom';

// nested routes
import Offers from './Offers';

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                tempora nisi eligendi quod ut illo cumque quibusdam
                reprehenderit veniam. Cum eaque, nostrum fugit ut inventore
                assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Obcaecati nam repellat
                hic dolore officia sequi quis quod commodi iusto doloremque.
                Corporis in et placeat unde sapiente perspiciatis minus!
                Recusandae, ad!
            </p>
            <br />

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                tempora nisi eligendi quod ut illo cumque quibusdam
                reprehenderit veniam. Cum eaque, nostrum fugit ut inventore
                assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Obcaecati nam repellat
                hic dolore officia sequi quis quod commodi iusto doloremque.
                Corporis in et placeat unde sapiente perspiciatis minus!
                Recusandae, ad!
            </p>
            <br />

            <button onClick={() => navigate('/products')}>
                'Navigate' to Products
            </button>
            <br />

            <Link to='/products'>products</Link>
            <Link to='/about/offers'>offers</Link>

            <br />

            <Routes>
                <Route path="offers" element={<Offers />} />
            </Routes>
        </div>
    );
}
