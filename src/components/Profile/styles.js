import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 112px;  

  @media (max-width: 600px) {
    margin-top: 0px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;

  @media (min-width: 425px) {
    flex-direction: row;
    justify-content: center;
    gap: 4.2rem;
  };

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

    @media (min-width: 425px) {
      height: 12.2rem;
      justify-content: space-between;        
    }

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

      @media (min-width: 425px) {
        margin-bottom: 1rem;
      }
    }
  }
`;