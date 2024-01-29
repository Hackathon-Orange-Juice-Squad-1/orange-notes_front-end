import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    max-width: 51.7rem;
    padding: 0 2.5rem;

    @media (min-width: 425px) {
        /* padding: 1.2rem 2.5rem; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: 0.15px;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
        margin-bottom: 3.2rem;

        @media (min-width: 425px) {
            font-size: 2.4rem;
            line-height: 2.4rem;
            margin-bottom: 2.4rem;
        }
    }
`;