import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 425px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    };
`;

export const ImageLogin = styled.img`
    display: none;
    @media (min-width: 425px) {
        display: block;
        height: 100vh;
    }
`;

export const Content = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;

    > h1 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.BLUE_2};

        @media (min-width: 425px) {
            /* text-align: center; */
            font-size: 4.8rem;
            line-height: 4rem;
        }
    }
`;