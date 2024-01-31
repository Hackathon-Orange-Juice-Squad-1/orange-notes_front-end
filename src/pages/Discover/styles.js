import styled from "styled-components";
import  { keyframes } from "styled-components";

const navOpenAnimation = keyframes`
    0% {
        transform: translate3d(0, 0, 0) scale(0);
        transform-origin: 90% 0%;
        opacity: 0;
    }

    100% {
        transform: translate3d(0, 0, 0) scale(1);
        transform-origin: 90% 0%;
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  grid-template-rows: 6.4rem 1fr;
  grid-template-areas:
    "header"
    "main";

  @media (min-width: 425px) {
    grid-template-rows: 7.3rem 1fr;
    gap: 11.2rem;
  }
`;

export const Title = styled.div`
  width: 100%;    
  display: flex;
  justify-content: center;
`;

export const Thumbnail = styled.div`
  position: relative;
  cursor: pointer;

  max-width: 38.9rem;
  min-height: 25.8rem;
  border: none;
  border-radius: 4px;

  margin-top: 2.4rem;

  > img {
    width: 100%;
    border-radius: 4px;
  }

  > button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    background: none;

    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &.on-edit {
      display: none;
    }
  }

  > div {
    position: absolute;
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
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: 5rem;
  right: 1.6rem;

  width: 20.8rem;
  padding: 1.6rem 0;

  background-color: ${({ theme }) => theme.COLORS.WHITE_2};
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.30);

  animation: ${navOpenAnimation} .2s ease-in-out;

  .arrow-up {
    height: 0px;
    width: 0px;
    position: absolute;
    top: -9px;
    right: 16px;
    border-right: solid 10px transparent;
    border-left: solid 10px transparent;
    border-bottom: solid 10px ${({ theme }) => theme.COLORS.WHITE_2};
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    li {
      width: 100%;

      button {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: .8rem 2.4rem;
        background: none;
        border: none;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        letter-spacing: 0.15px;
        color: ${({ theme }) => theme.COLORS.GRAY_3};

        &:hover {
          background-color: #fec;
        }
      }
    }
  }

  &.navClosed {
    display: none;
  }

  &.navOpen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }
`;

export const Main = styled.main`
  grid-area: main;

  width: 100%;

  padding: 12rem 2.4rem;

  @media (min-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0;
    overflow: auto;
  }

  h1 {
    margin-top: 112px;
    color: #222244;
    max-width: 744px;
    text-align: center;
    font-size: 34px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.25px;
    margin-bottom: 120px;

    @media (max-width: 600px) {
      margin-top: 0;
      font-size: 24px;
    }
  }

  > h2 {
    margin: 4rem 0 1.6rem;

    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.15px;
    color: ${({ theme }) => theme.COLORS.GRAY_3};

    @media (min-width: 425px) {
      margin: 5.6rem 0 1.6rem;
    }
  }
`;

export const Projects = styled.div`
  margin-bottom: 77px;

  @media (min-width: 425px) {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    /* margin-top: 4rem; */
  }
`;

export const BlankSpace = styled.div`
  display: none;

  @media (min-width: 425px) {
    display: block;
    width: 38.9rem;
    align-self: stretch;
    border-radius: 4px;
    background: #fafafa;
    margin-top: 2.4rem;
  }
`;
