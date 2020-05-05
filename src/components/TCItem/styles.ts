import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 32px;
  width: 370px;
  height: 200px;
  position: relative;
  background: #000;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background: transparent;
    background-image: linear-gradient(
      -180deg,
      transparent,
      rgba(0, 0, 0, 0.84)
    );
  }
`;

export const ThumbTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
