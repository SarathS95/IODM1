import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatePage from "../pages/BitcoinRatePage";
import DashboardPage from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import { Route, Routes } from "react-router-dom";


function AppRoutes(props) {
    
    return (
        <Routes>
            {/* index match on default/home URL */}
            <Route index element={<HomePage {...props} />} />
            <Route path='/login' element={<LoginPage {...props} />} />
            <Route path='/bitcoinRates' element={<BitcoinRatePage {...props} />} />
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    )
}
export default AppRoutes;