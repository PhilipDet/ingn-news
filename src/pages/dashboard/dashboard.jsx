import { DashboardStyled } from "./dashboard.styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async (accessToken) => {
            await fetch(
                `https://api.contentful.com/spaces/${
                    import.meta.env.VITE_PUBLIC_SPACE_ID
                }/environments/master/entries`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setProfile(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        };

        const accessToken = localStorage.getItem("access_token");
        accessToken ? fetchProfile(accessToken) : navigate("/");
    }, []);
    return (
        <DashboardStyled>
            <h1>Dashboard</h1>
        </DashboardStyled>
    );
};
