// Using the following starter code, complete the BitcoinRates component 
// to fetch and display the current price of Bitcoin in the selected currency.
//  ● Use a useEffect hook with cleanup and appropriate dependencies.

import { useEffect, useState } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
 export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const[price, setPrice]= useState('')

    useEffect (() => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    .then(response => response.json())
    .then(json => {
        // setPrice(json.price);
        console.log(json?.bitcoin[currency])
    },[currency])
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
})
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {/* {options} */}
                </select>
            </label>
        </div>
    )
 }