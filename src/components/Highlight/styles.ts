import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: calc(-4.9vw + -20px);

  position: relative;
  height: 80vh;

  @media screen and (min-width: 768px) {
    max-height: 50vw;
  }
`;

export const HighlightContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  left: 50%;
  transform: translateX(-50%);
  max-width: 1920px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  z-index: 1;
  padding: 5%;
`;

export const HilightBackground = styled.div`
  height: 90vh;
  max-height: 56.25vw;
  z-index: 0;
  overflow: hidden;
  background-color: #000;

  position: absolute;
  top: 0;
  width: 100%;
  /* height: 100%; */

  &::before {
    background-image: linear-gradient(180deg, rgba(31, 31, 31, 0) 35%, #1f1f1f),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 5%, transparent 20%),
      linear-gradient(270deg, transparent 30%, #000 80%);

    display: block;
    content: '';
    position: absolute;
    width: calc(100% + 1px);
    height: calc(100% + 1px);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    min-width: 768px;

    object-fit: cover;

    object-position: center center;
  }
`;

export const Headline = styled.h1``;

export const HeadlinePic = styled.picture`
  font-size: 24px;
  line-height: 32px;
  text-align: left;

  height: 8vw;
`;

export const HeadlineImg = styled.img`
  height: 8vw;
`;

export const Description = styled.div`
  width: 38%;

  margin-top: 0.4em;

  text-align: left;
  font-size: 19px;
  line-height: 28px;
`;

export const Actions = styled.div`
  width: auto;
  align-items: center;
  justify-content: flex-start;

  margin-top: 2em;

  display: flex;
`;
