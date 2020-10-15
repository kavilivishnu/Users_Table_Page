import React from 'react';

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    // Below for loop is essentially to get all the page numbers intially for the data that we recieve. The number of page numbers 
    // will vary based on the amount of data that we want to see in one page. As the posts in current page increase the number of page 
    // numbers will decrease and vce versa. Later on the numbers will be clickable and will help us navigate to all the following pages.
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav style={{ marginLeft: "120px" }}>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    // In the above map function we extract all those the numbers that we populated the pageNumbers array with, and make 
                    // them clickable which will enable us to navigate to different pages.
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
