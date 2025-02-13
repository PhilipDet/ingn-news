import styled from "styled-components";

export const ArticleStyled = styled.article`
    display: flex;
    justify-content: center;
    flex: 1;

    article {
        background-color: #ffffff;
        max-width: 1230px;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin: 0 2rem;

        img {
            object-fit: cover;
            width: 100%;
            max-height: 500px;
            height: 100%;
            overflow: hidden;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5rem 2rem;
            gap: 5rem;

            header {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2rem;

                h1 {
                    font-size: 4rem;
                }

                span {
                    color: #c52525;
                    font-size: 1.4rem;
                }
            }

            p {
                max-width: 700px;
                width: 100%;
                font-size: 1.6rem;
            }
        }
    }
`;
