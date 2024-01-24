import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    grid-template-rows: 6.4rem 1fr;
    grid-template-areas: 
        "header"
        "main";

    @media (min-width: 425px) {
        grid-template-rows: 7.3rem 1fr;
    }
`;

export const Main = styled.main`
    grid-area: main;

    width: 100%;

    padding: 5.6rem 2.4rem;

    overflow-y: auto;

    > h2 {
        margin: 4rem 0 1.6rem;

        font-size: 2rem;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: 0.15px;
        color: ${({theme}) => theme.COLORS.GRAY_3};
    }
`;