import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export const CallbackPage = () => {
    const { access_token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(access_token);
        localStorage.setItem("access_token", access_token);
        navigate("/dashboard");
    }, []);
    return (
        <div>
            <h1>Hvis du ikke bliver sendt vider så tryk her..</h1>
            <Link to="/dashboard">Send mig vider!</Link>
        </div>
    );
};
