import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './paginate.css';

const Paginate = ({ itemsPerPage }) => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/comments'
        );
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
        console.log(`🔮 Loading items from ${itemOffset} to ${endOffset}`);
    }, [data, itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `🔥 requested page ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="container">
            <h2>Pagination</h2>
            <h3>react-paginate & fetch</h3>
            <Items currentItems={currentItems} />
            <ReactPaginate
                pageCount={pageCount}
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className="paginateStyle"
            />
        </div>
    );
};

const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div key={item.id} className="item-post">
                        <h4>
                            <span>{item.id}</span> {item.name}
                        </h4>
                        <p>{item.email}</p>
                        <p>{item.body}</p>
                    </div>
                ))}
        </>
    );
};

export default Paginate;
