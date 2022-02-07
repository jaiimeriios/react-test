import { Link, Outlet } from 'react-router-dom';

// imports not required - using Outlet
// import ProductsFeatured from './ProductsFeatured';
// import ProductsNew from './ProductsNew';

const Products = () => {
    return (
        <>
            <h2>Products</h2>
            <br />
            <input type="search" placeholder="Search Products" />
            <br />
            <nav className="products-nav">
                <Link to="featured">Featured</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Products;
