import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Pagination from './Pagination';

function Search() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Initial state is set to PAGE "1".
    const [postsPerPage] = useState(20); // Posts/Data per page is initally set to "20"
    const indexOfLastPost = currentPage * postsPerPage; // => 1 * 20 = 20. As per above state, 
    const indexOfFirstPost = indexOfLastPost - postsPerPage; // => 20 - 20 = 0. As per above state. Changes as the state changes.
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    // The slice() method basically slices/breaks down chunks of data into smaller parts. It takes two arguments: start, end. 
    // It considers the element at the start point but won't include the last element i.e interma os index values. If we don't 
    // mention the "end" value the value be taken right from the beginning element all the upto the end And will result in making 
    // all the data in one page and which will make no sense of using "Pagination". 

    // ALL THE ABOVE STATES ARE USED TO IMPLEMENT "PAGINATION" TO OUR APP.

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        axios.get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
            .then((res) => {
                console.log(res)
                setData(res.data)

            }).catch((err) => {
                console.log(err)
            })
    }, [])

    function Find(rows) {
        // const columns = rows[0] && Object.keys(rows[0]); // LINE 21
        return rows.filter((row) =>
            row.first_name.toLowerCase().indexOf(search) > - 1 ||
            row.last_name.toLowerCase().indexOf(search) > - 1

            // some() is a metthod in arrays where the specified value is returned reagrdless the collection of segregated data if it matches with any of the expression.
            // whereas only filter functions scans all the data to get a signle value from expression which will increase the time complexity 
            // and will make the code look tidious.
            // Ex: If there would be no LINE 21, the code would be like below
            // return row.first_name.toLowercase().indexOf(search) > - 1 ||
            // row.last_name.toLowercase().indexOf(search) > - 1 ||
            // row.email_name.toLowercase().indexOf(search) > - 1 || etc...
            // LINE 21 will pull out all the key values from the rows and let us access them all at once with some() method which will 
            // also work as the alternative AND operator.
            // columns.some(
            //     (column) => row[column].toString().toLowerCase().indexOf(search.toLowerCase()) > -1 // Used to search including all the fields
            // )
        )

    }
    return (
        <div className="container mt-5">
            <h1 style={{ textAlign: "left", marginLeft: "30px" }} >Users</h1>
            <div>
                <input
                    className="search"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    size="30"
                    placeholder="Search by first or last name"
                />
            </div>
            <br />
            <br />
            <div>
                <Table data={Find(currentPosts)} />
                {/* The above equation is for having all the posts/data in page 1 that is the id starting from number 1
                    and applying the Find function(ref = LINE 28) which is for searchin the data. Then you pass these props
                    to the data component */}
                <br />
                <Pagination
                    postsPerPage={postsPerPage}
                    // Here we are passing the entire length of data as props to get the page numbers and iterate throught
                    // the pages to make a certain data visible in that certain page.  
                    totalPosts={data.length}
                    // The paginate prop will be recieving the props from "Pagination" component and will be passing 
                    // the clicked number to the paginate snippet (ref = LINE : 21) which will then set the currentpage number 
                    // with (setCurrentPage) state that has been clicked and will make the data in that particular page visible 
                    // to the user.
                    paginate={paginate}
                />
            </div>
        </div>
        // {Find(data)}
    )
}

export default Search;