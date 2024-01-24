import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.6rem;

    > img {
        width: 12.2rem;
        height: 12.2rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;

        > h2 {
            font-size: 2.4rem;
            font-weight: 400;
            line-height: 2.4rem;
            color: ${props => props.theme.COLORS.GRAY_4};
        }

        > span {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 1.6rem;
            letter-spacing: 0.15px;
            color: ${props => props.theme.COLORS.GRAY_8};
        }
    }
`;