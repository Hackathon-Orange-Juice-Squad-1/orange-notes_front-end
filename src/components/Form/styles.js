import styled from "styled-components";

export const Container = styled.form`
    width: 100%;

    padding: 1.2rem 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > h2 {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 2.4rem;
        margin-bottom: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_3};
    }
`;