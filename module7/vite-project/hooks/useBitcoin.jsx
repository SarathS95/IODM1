import { useState, useEffect } from "react";

export function useBitcoin(url, currency) {

    const [coin, setCoin] = useState([]);
    const cors_api_url = 'http://localhost:8080/';
    let ignore = false;
    const doCORSRequest =(options) => {
        fetch(cors_api_url + options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then((reponse) => reponse.json())
        .then((result) => {
            console.log(result.bitcoin[currency.toLowerCase()])
            if(!ignore) {
                setCoin(result.bitcoin[currency.toLowerCase()])
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }
    useEffect(() => {
        if (url) {
            console.log('test')
            doCORSRequest({method: 'GET', url: url, data: ''})
        }
        return() => {
            ignore = true;
        };
    }, [url]);
    return coin
}