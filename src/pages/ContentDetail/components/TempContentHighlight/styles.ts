import styled, { css } from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

interface BgProps {
  hasBlur: boolean;
  hasMarginRight: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 30px;
  height: 30vw;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundImg = styled.div<BgProps>`
  width: 30%;
  height: 100%;
  position: relative;

  ${(props) =>
    props.hasMarginRight &&
    css`
      margin-right: 15%;
    `}

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  ${(props) =>
    props.hasBlur &&
    css`
      &::before {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0%;
        left: 0;
        background-image: linear-gradient(
          90deg,
          #000,
          transparent 40%,
          transparent
        );
      }
    `}
`;

export const Content = styled.div`
  padding: 5%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  position: relative;
  font-weight: 700;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  word-wrap: break-word;
  color: #fff;
  font-size: calc(0.24vw + 17.12px);
  margin-right: 10px;
`;
