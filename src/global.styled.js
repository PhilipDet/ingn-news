import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color:#F6F3F3;
        font-size: 1.6rem;
        font-family: "Roboto Flex", sans-serif;
        font-weight: 400;
        height: 100vh;
    }

    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    h1, h2, h3, p, span, a {
        font-family: "Roboto Flex", sans-serif;
        font-weight: 400;
        color: #242424;
        text-decoration: none;
    }
`;
