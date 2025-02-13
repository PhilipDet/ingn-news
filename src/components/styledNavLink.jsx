import { NavLink } from "react-router-dom";
export const NavLinkStyled = ({ children, ...props }) => {
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
