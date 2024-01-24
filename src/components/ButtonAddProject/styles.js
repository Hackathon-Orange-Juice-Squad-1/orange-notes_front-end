import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    padding: 6.8rem 2.1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_1};

    border: none;
    border-radius: 4px;

    margin-top: 2.4rem;

    > label {
        align-self: center;
        cursor: pointer;

        input {
            display: none;
        }
    }

    > h2 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.COLORS.GRAY_4};
    }

    > p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.4rem;
        letter-spacing: 0.25px;
        color: ${({ theme }) => theme.COLORS.GRAY_4};
    }
`;