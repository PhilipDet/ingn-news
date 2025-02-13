import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyled } from "./global.styled.js";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyled />
            <App />
        </BrowserRouter>
    </StrictMode>
);
