import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CallbackPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash;
        const token = new URLSearchParams(hash.substring(1));
        const access_token = token.get("access_token");
        console.log(access_token);
        localStorage.setItem("access_token", access_token);

        // navigate("/dashboard");
    }, []);
    return (
        <div>
            <h1>Hvis du ikke bliver sendt vider så tryk her..</h1>
            <Link to="/dashboard">Send mig vider!</Link>
        </div>
    );
};
