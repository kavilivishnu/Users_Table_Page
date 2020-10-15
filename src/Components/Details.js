import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Details() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
            .then((res) => {
                console.log(res)
                setData(res.data)

            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div style={{ textAlign: "left", fontSize: "30px" }}>
            <h1 style={{ marginLeft: "1cm" }}>Details</h1>
            {
                data.map((items, id) =>

                    <ul key={id} style={{ listStyle: "none" }}>
                        <li><b>First Name:</b> {items.first_name}</li>
                        <li><b>Last Name:</b> {items.last_name}</li>
                        <li><b>Company Name:</b> {items.company_name}</li>
                        <li><b>City:</b> {items.city}</li>
                        <li><b>State:</b> {items.state}</li>
                        <li><b>Zip:</b> {items.zip}</li>
                        <li><b>Email:</b> {items.email}</li>
                        <li><b>Web:</b> {items.web}</li>
                        <li><b>Age:</b> {items.age}</li>
                    </ul>
                )
            }
        </div>
    )
}

export default Details;
