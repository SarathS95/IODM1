import Link from "next/link";
import { BitcoinRates } from "../components/BitcoinRates";

export default function Bitcoin(){

    return(
        <div className="Bitcoin">
            <Link href="/bitcoinRates">Bitcoin</Link>
            <BitcoinRates/>
        </div>
    )
}