import { NavLinkStyled } from "../styledNavLink";
import { useEffect, useState } from "react";
import { NavbarStyled } from "./navbar.styled";
import { FaBars } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const redirectUrl = "https://magenta-crepe-4c6100.netlify.app/callback";
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
                            <NavLinkStyled
                                to="/"
                                onClick={() => setIsOpen(false)}
                            >
                                Alle
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to="/category/indland"
                                onClick={() => setIsOpen(false)}
                            >
                                Indland
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to="/category/udland"
                                onClick={() => setIsOpen(false)}
                            >
                                Udland
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to="/category/teknologi"
                                onClick={() => setIsOpen(false)}
                            >
                                Teknologi
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to="/category/sport"
                                onClick={() => setIsOpen(false)}
                            >
                                Sport
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to="/category/politik"
                                onClick={() => setIsOpen(false)}
                            >
                                Politik
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to="/category/samfund"
                                onClick={() => setIsOpen(false)}
                            >
                                Samfund
                            </NavLinkStyled>
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
