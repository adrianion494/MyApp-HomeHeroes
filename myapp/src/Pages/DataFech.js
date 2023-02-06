import React, { useState, useEffect } from "react";
import Axios from 'axios'

function DataFetch() {
    const [data, setPosts] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/products/getAll")
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            <ul>
                {

                    data.map(data => <li key={data.idProducts}>{data.nameProducts} {data.price}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetch;