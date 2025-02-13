import styled from "styled-components";

export const NavbarStyled = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: 0 4px 4px #00000017;
    background-color: #ffffff;

    .nav-container {
        max-width: 1230px;
        width: 100%;
        padding: 10px 0;
        margin: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        @media screen and (max-width: 960px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .nav-logo {
            h1 {
                font-size: 4.8rem;
                font-weight: 700;
                color: #c52525;
                font-family: "Rigtheous", sans-serif;
            }
        }

        .nav-links {
            grid-row: 2 / 3;
            grid-column: -1 / 1;
            display: flex;
            justify-content: center;
            ul {
                list-style-type: none;
                display: flex;
                gap: 1rem;

                li {
                    font-size: 2.4rem;

                    &:first-child::before,
                    &::after {
                        content: "|";
                    }

                    &:first-child::before {
                        margin-right: 1rem;
                    }
                    &::after {
                        margin-left: 1rem;
                    }

                    a {
                        text-transform: capitalize;
                    }
                }

                @media screen and (max-width: 960px) {
                    flex-direction: column;
                    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

                    li {
                        text-align: center;
                        &:first-child::before,
                        &::after {
                            display: none;
                        }
                    }
                }
            }
        }

        .nav-actions {
            grid-column: 2 / 3;
            ul {
                list-style-type: none;
                display: flex;
                gap: 1rem;
                font-size: 2.4rem;

                li {
                    a {
                        color: #c52525;
                        cursor: pointer;
                        font-size: 3rem;
                    }
                }

                .nav-burgerBtn {
                    display: none;
                    @media screen and (max-width: 960px) {
                        display: block;
                    }
                }

                @media screen and (max-width: 960px) {
                    justify-content: flex-end;
                }
            }
        }
    }
`;
