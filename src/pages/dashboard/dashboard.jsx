import { DashboardStyled } from "./dashboard.styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchContent } from "../../utils/contentful";

export const DashboardPage = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState({});

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        accessToken ? setContent(FetchContent(accessToken)) : navigate("/");
        console.log("Content:", content);
    }, []);
    return (
        <DashboardStyled>
            <h1>Dashboard</h1>
            {content.items.map((item) => (
                <div key={item.sys.id}>
                    <h2>{item.fields.title}</h2>
                </div>
            ))}
        </DashboardStyled>
    );
};
