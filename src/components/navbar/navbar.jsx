import { useEffect, useState } from "react";
import { NavbarStyled } from "./navbar.styled";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const redirectUrl = "https://magenta-crepe-4c6100.netlify.app/callback";
    const loginLink = `https://be.contentful.com/oauth/authorize?response_type=token&client_id=${
        import.meta.env.VITE_CLIENT_ID
    }&redirect_uri=${redirectUrl}&scope=content_management_manage`;

    const navLinks = [
        "indland",
        "udland",
        "teknologi",
        "sport",
        "politik",
        "samfund",
    ];

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
                        {navLinks.map((link) => (
                            <li key={link}>
                                <NavLinkStyled
                                    to={`/category/${link}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </NavLinkStyled>
                            </li>
                        ))}
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

const NavLinkStyled = ({ children, ...props }) => {
    return (
        <NavLink
            {...props}
            style={({ isActive }) => ({
                color: isActive ? "red" : "black",
            })}
        >
            {children}
        </NavLink>
    );
};
