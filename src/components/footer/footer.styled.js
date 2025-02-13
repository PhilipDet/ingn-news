import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: #ffffff;
    display: flex;
    justify-content: center;

    .footer-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 20px;
        margin: 0 20px;
        padding: 50px 0;
        max-width: 1230px;
        width: 100%;
        list-style: none;

        .footer-links {
            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 5px;

                li {
                    font-size: 1.6rem;
                    color: #000000;

                    &:first-child {
                        margin-bottom: 15px;
                    }

                    @media screen and (max-width: 768px) {
                        text-align: center;
                    }
                }
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
`;
