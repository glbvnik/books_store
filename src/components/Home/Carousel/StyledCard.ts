import styled from "styled-components";

interface StyledCardProps {
  photo: string;
}

const StyledCard = styled.div<StyledCardProps>`
  border-radius: 12px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  display: flex;
  margin-right: 24px;
  height: 250px;
  width: 450px;
  position: relative;

  &:before {
    background-color: lightgrey;
    background-image: ${({ photo }) => `url(${photo})`};
    background-size: cover;
    content: "";
    filter: blur(9px);
    z-index: -1;
    height: inherit;
    width: inherit;
  }

  &:hover {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.32);
  }

  @media (max-width: 768px) {
    height: 200px;
    width: 400px;
  }

  @media (max-width: 540px) {
    height: 175px;
    width: 325px;
  }

  @media (max-width: 428px) {
    height: 150px;
    width: 280px;
  }

  @media (max-width: 375px) {
    height: 130px;
    width: 200px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  width: inherit;
  position: absolute;
`;

const BookData = styled.div`
  border-radius: 12px;
  color: white;
  margin: auto 0;
  padding: 24px 24px 24px 8px;
  height: 200px;
  width: 60%;

  h3 {
    font-size: 24px;
    margin-bottom: 24px;

    @media (max-width: 540px) {
      font-size: 22px;
      margin-bottom: 22px;
    }

    @media (max-width: 428px) {
      font-size: 19px;
      margin-bottom: 18px;
    }

    @media (max-width: 375px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  p {
    font-size: 15px;

    @media (max-width: 540px) {
      font-size: 14px;
    }

    @media (max-width: 428px) {
      font-size: 13px;
    }

    @media (max-width: 414px) {
      font-size: 12px;
    }

    @media (max-width: 375px) {
      font-size: 11px;
    }
  }

  @media (max-width: 375px) {
    padding-top: 18px;
  }
`;

const CardImage = styled.div`
  margin: auto;
  height: 200px;
  width: 140px;
  position: relative;

  img {
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    height: 180px;
    width: 120px;
  }

  @media (max-width: 540px) {
    height: 160px;
    width: 100px;
  }

  @media (max-width: 428px) {
    height: 120px;
    width: 80px;
  }

  @media (max-width: 375px) {
    height: 100px;
    width: 60px;
  }
`;

export { BookData, CardContainer, CardImage, StyledCard };
