import styled from "styled-components";

export const ArticleCardStyled = styled.article`
    background-color: #ffffff;
    display: grid;
    grid-column: ${(props) => props.$gridColumn};
    grid-row: ${(props) => props.$gridRow};

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .information {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 3rem;

        h2 {
            font-size: 4rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            @media screen and (max-width: 768px) {
                font-size: 3rem;
            }
        }

        p {
            font-size: 1.6rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        span {
            color: #c52525;
            font-size: 1.4rem;
        }

        a {
            font-size: 1.4rem;
        }
    }

    &.box-1 {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 5fr;

        img {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }

        .information p {
            -webkit-line-clamp: 1;
        }
    }

    &.box-5,
    &.box-8,
    &.box-9 {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;

        img {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }

        .information p {
            display: none;
        }
    }

    &.box-2,
    &.box-4 {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 3fr;

        img {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }

        .information p {
            display: none;
        }
    }

    &.box-3 {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

        img {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }

        .information p {
            display: none;
        }
    }

    &.box-6 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        img {
            grid-column: 1 / 2;
        }
    }

    &.box-7 {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        img {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
        }
    }

    @media screen and (max-width: 768px) {
        &.box-1,
        &.box-2,
        &.box-3,
        &.box-4,
        &.box-5,
        &.box-6,
        &.box-7,
        &.box-8,
        &.box-9 {
            grid-column: -1 / 1;

            img {
                grid-column: -1 / 1;
                grid-row: 2 / 3;
            }

            .information {
                grid-column: -1 / 1;
            }
        }
    }
`;
