import styled, { keyframes } from "styled-components";

const onHover = keyframes`
    0% {
		transform: scale(1);
	}

	100% {
		transform: scale(1.05);
	}
`;

export const Container = styled.div`
    position: relative;

    width: 38.9rem;

    margin-top: 2.4rem;

    transition: filter .3s;

    &:hover {
        cursor: pointer;
        filter: drop-shadow(3px 3px 5px #000000);
        animation: ${onHover} ease-in-out .3s forwards;
    }
`;

export const ThumbWrapper = styled.div`
    width: 100%;
    height: 25.8rem;
    border-radius: 4px;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.9);
        border-radius: 4px;
        transition: filter .3s;

        &:hover {
            filter: brightness(1);
        }
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