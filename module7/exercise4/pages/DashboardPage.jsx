import { useNavigate, Outlet } from "react-router-dom";

export default function DashboardPage() {

    const navigate = useNavigate();

    return (
        <div className="DashboardPage componentBox">
            <h1>Dashboard</h1>

            <Outlet />

            <button onClick={() => navigate('/bitcoinRates')}>
                Show Bitcoin Rates
            </button>
            <button onClick={() => navigate('/login')}>
                Login
            </button>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    )
}