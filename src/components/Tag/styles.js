import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_1};
    border-radius: 10rem;

    > li {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.8rem;
        letter-spacing: 0.16px;
        color: ${({ theme }) => theme.COLORS.GRAY_4};
    }
`;