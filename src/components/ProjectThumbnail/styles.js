import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    width: 38.9rem;

    margin-top: 2.4rem;
`;

export const ThumbWrapper = styled.div`
    width: 100%;
    height: 25.8rem;
    border-radius: 4px;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
    }

    &.on-edit {
        display: none;
    }
`;