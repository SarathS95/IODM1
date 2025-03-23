//  import { useState, useEffect } from "react";
 
//  // hooks are usually named exports rather than default
//  export function useData(url) {
//     // state variable for holding fetched json data
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         if (url) {
//             let ignore = false;
//             fetch(url)
//                 .then(response => response.json())
//                 .then(json => {
//                     if (!ignore) {
//                         setData(json);
//                     }
//                 });
//             // cleanup function, in case url changes before complete
//             return () => {
//                 ignore = true;
//             };
//         }
//     }, [url]); // re-run effect if url changes
//     // return the data fetched from the given url
//     return data;
//  }
 // save as useData.jsx in the 'hooks' folder
 import React, { useState, useEffect } from 'react';
export default function CORSAnywhereDemo(props) {
    const [data, setData] = useState([]);
    const cors_api_url = 'http://localhost:8080/';
    useEffect(() => {
        doCORSRequest({ method: 'GET', url: props.url ? props.url : 'https://fakestoreapi.com/products', data: '' })
    }, []);
    const doCORSRequest = (options) => {
        fetch(cors_api_url + options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                // result = Array.isArray(result)
                console.log(typeof result)
                // setData(result)
            })
            .catch((error) => {
                console.log(error)
            });
    };
    const handlePost = () => {
        doCORSRequest({ method: 'POST', url: props.url, data: '' });
    };
    return (
        data
    );
};