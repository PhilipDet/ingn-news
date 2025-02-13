import styled from "styled-components";

export const HomeStyled = styled.main`
    display: flex;
    justify-content: center;
    flex: 1;

    #articles {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 310px;
        gap: 2rem;
        max-width: 1230px;
        width: 100%;
        margin: 0 2rem;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
`;
