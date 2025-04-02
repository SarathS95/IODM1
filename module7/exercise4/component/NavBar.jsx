import { useContext } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";

export default function NavBar(){
    const {theme} = useContext(MyThemeContext);
    const navigate = useNavigate();

    return (
        <nav className="NavBar"
        style={{backgroundColor: theme.background, color:theme.foreground}}>
            <ul className="menu">
                <li><NavLink to ="/">Home</NavLink></li>
                <li><NavLink to ="/login">Login</NavLink></li>
                <li><NavLink to ='/bitcoinRates'>Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    )
}
