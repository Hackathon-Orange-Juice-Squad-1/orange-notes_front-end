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