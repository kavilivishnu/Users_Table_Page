import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {

    const columns = data[0] && Object.keys(data[0]);
    // The above short circuit operator(&&) will only evaluate if there are any key values in the data of Api.
    // If there are any, we extract the keys(which we take as headinhgs here) in the 0th index object of the 
    // array and assign it to the variable so that we can make use of that the key(headings) at a time.    
    return (
        <table cellPadding={0} cellSpacing={0} className="table table-striped table-bordered mydatatable" style={{ width: "100%" }}>
            <thead>
                <tr>
                    {data[0] && columns.map((heading, id) =>
                        // The above condition is only evaluated for true statements i.e. short circuit operator(&&).
                        // If there are keys in the object, we extract those and render them in row format(flex-direction: row). 
                        // That is the reason we are writing the code within <tr></tr> tag. Then we map the keys and render on the screen 
                        <th key={id}>
                            {/* we make the extracted keys as heading */}
                            {/* onClick of the heading names, the Details page will be diplayed */}
                            <Link to="/Details" style={{ textDecoration: "none", color: "black" }}>
                                {heading}
                            </Link>
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {/* The below body tag is where we receive all the values of the object from the Api, map through
                    all the values and render them onto the screen */}
                {data.map((row, id) => (
                    <tr key={id}>
                        <td>{row.id}</td>
                        <td>{row.first_name}</td>
                        <td>{row.last_name}</td>
                        <td>{row.company_name}</td>
                        <td>{row.city}</td>
                        <td>{row.state}</td>
                        <td>{row.zip}</td>
                        <td>{row.email}</td>
                        <td>
                            <a target="_blank" href="https://blankslate.io/">{row.web}</a>
                            {/* the target= "_blannk is a command use to make the link open in new tab" */}
                        </td>
                        <td>{row.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
