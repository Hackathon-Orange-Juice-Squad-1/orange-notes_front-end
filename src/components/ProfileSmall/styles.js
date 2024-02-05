import styled from "styled-components";

export const Container = styled.div`
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    > img {
        width: 4rem;
        border-radius: 50%;
    }

    > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        h2 {
            font-size: 1.6rem;
            font-weight: 600;
            color: ${({ theme }) => theme.COLORS.GRAY_3};
        }

        span {
            font-size: 1.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_2};
        }
    }

    &.on-thumb {
        gap: 8px;

        img {
            width: 2.4rem;
        }

        div {
            flex-direction: row;
            align-items: center;
            gap: 8px;

            h2 {
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.GRAY_2};
            }

            span::before {
                content: "•";
                font-size: 1.6rem;
                font-weight: 600;
                color: ${({ theme }) => theme.COLORS.GRAY_2};
                margin-right: 8px;
            }
        }
    }
`;