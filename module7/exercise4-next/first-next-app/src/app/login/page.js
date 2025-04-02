
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Login(){

    return(
        <div className="Login">
            <Link href="/login">Login Form</Link>
            <LoginForm/>
        </div>
    )
}