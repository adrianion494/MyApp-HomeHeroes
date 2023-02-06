import React, { useState, useEffect } from "react";
import Axios from 'axios'

function DataFetch1() {
    const [posts, setPosts] = useState([])


    const getData = () => {
        Axios.get("http://localhost:8080/products/getAll")
            .then((response) => {
                console.log("hello" + response);
                setPosts(response.data.price + "..." + response.data.nameProducts);

            });
    }


    return (
        <div>
            Hello Youtube <button onClick={getData}>Get Data</button>
            {posts}
        </div>
    )
}

export default DataFetch1;