import { NavbarStyled } from "./navbar.styled";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const redirectUrl =
        "https://incandescent-meerkat-161193.netlify.app/dashboard";
    const loginLink = `https://be.contentful.com/oauth/authorize?response_type=token&client_id=${
        import.meta.env.VITE_CLIENT_ID
    }&redirect_uri=${redirectUrl}&scope=content_management_manage`;

    return (
        <NavbarStyled $isOpen={isOpen}>
            <ul className="nav-container">
                <li className="nav-logo">
                    <h1>INGN</h1>
                </li>
                <li className="nav-links">
                    <ul>
                        <li>
                            <NavLink to="/" onClick={() => setIsOpen(false)}>
                                Alle
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/category/indland"
                                onClick={() => setIsOpen(false)}
                            >
                                Indland
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/category/udland"
                                onClick={() => setIsOpen(false)}
                            >
                                Udland
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/category/teknologi"
                                onClick={() => setIsOpen(false)}
                            >
                                Teknologi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/category/sport"
                                onClick={() => setIsOpen(false)}
                            >
                                Sport
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/category/politik"
                                onClick={() => setIsOpen(false)}
                            >
                                Politik
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/category/samfund"
                                onClick={() => setIsOpen(false)}
                            >
                                Samfund
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="nav-actions">
                    <ul>
                        <li>
                            <a href={loginLink}>
                                <IoMdPerson />
                            </a>
                        </li>
                        <li className="nav-burgerBtn">
                            <a onClick={() => setIsOpen(!isOpen)}>
                                <FaBars />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </NavbarStyled>
    );
};
