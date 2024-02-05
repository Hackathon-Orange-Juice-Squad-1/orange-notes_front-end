import styled from "styled-components";

export const Container = styled.div`
    display: grid;

    width: 100vw;
    height: 100vh;

    grid-template-rows: 6.4rem 1fr;
    grid-template-areas: 
        "header"
        "main";

    @media (min-width: 425px) {
        grid-template-rows: 7.3rem 1fr;
        /* gap: 11.2rem; */
    }
`;

export const Main = styled.main`
    grid-area: main;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.6rem;

    padding: 4.8rem 2.4rem;

    @media (min-width: 425px) {
        max-height: 100%;

        gap: 2rem;

        padding-bottom: 0;
        overflow: auto;
    }

    > .search {
        h2 {
            margin-bottom: 1.6rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 2rem;
            letter-spacing: 0.15px;
            color: ${({ theme }) => theme.COLORS.GRAY_3};
        }
    }
`;

export const Projects = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 425px) {
        flex-direction: row;
        align-items: center;
        gap: 2.4rem;
        overflow: auto;
        /* margin-top: 4rem; */
    }

    > div.no-projects {
        @media (min-width: 425px) {
            max-width: 100%;
            display: flex;
            align-items: center;
            gap: 2.4rem;
            /* margin-top: 4rem; */
        }
    }
`;

export const BlankSpace = styled.div`
    display: none;

    @media (min-width: 425px) {
        display: block;
        width: 38.9rem;
        align-self: stretch;
        border-radius: 4px;
        background: #fafafa;
        margin-top: 2.4rem;
    }
`;