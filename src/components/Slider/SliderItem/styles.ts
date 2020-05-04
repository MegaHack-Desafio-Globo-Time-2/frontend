import styled from 'styled-components';

export const Container = styled.div``;

export const Figure = styled.figure`
  overflow: hidden;
`;

export const Placeholder = styled.div`
  background-color: rgb(36, 36, 36);
  padding-top: 148.066%;
  content: '';
  display: block;
  pointer-events: none;
  width: 100%;
`;

export const Wrapper = styled.span`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ThumbWrapper = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const Thumb = styled.img`
  position: relative;
  transition: opacity 0.3s;
  width: 100%;
  height: auto;
  display: block;
`;
