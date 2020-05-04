import styled from 'styled-components';

export const FullPage = styled.div`
  height: 100vh;
  color: white;
  position: relative;
`;

export const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 30px;
`;

export const TitleHighlight = styled.span`
  color: #F31D1D;
`;

export const Description = styled.p`
  padding: 5px 100px;
  font-size: 16px;
  color: #707070;
  text-align: center;
`;

export const DescriptionHighlight = styled.span`
  color: white;
`;
