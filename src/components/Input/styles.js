import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    margin-bottom: 1.6rem;

    @media (min-width: 425px) {
        max-width: 51.3rem;
    }

    > label {
        display: none;
    }

    > input {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 1.6rem 1.2rem;

        background: transparent;

        border: 1px solid ${({theme}) => theme.COLORS.GRAY_7};
        border-radius: 4px;

        &::placeholder {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;
            letter-spacing: 0.15px;
            color: ${({theme}) => theme.COLORS.GRAY_2};
        }
    }
`;