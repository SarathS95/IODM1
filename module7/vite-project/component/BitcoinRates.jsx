// Using the following starter code, complete the BitcoinRates component 
// to fetch and display the current price of Bitcoin in the selected currency.
//  ● Use a useEffect hook with cleanup and appropriate dependencies E


import {useState, useEffect} from "react"
import { useBitcoin } from "../hooks/useBitcoin";
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
 export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [currencyRates, setCurrencyRates] =useState('')
    let ignore = false;
    
    
    const data = useBitcoin(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, currency)
    

//     // useEffect(() => {
//     //     console.log(currency);
//     //     // let ignore = false;
// return () => {
//     ignore = true
//     console.log('Cleanup effect')
// };
// }, [currency])

 
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate: {data}</h3>
                 {/* {data.coin.bitcoin[currency.toLowerCase()]}  */}
            
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
        </div>
    )
 }