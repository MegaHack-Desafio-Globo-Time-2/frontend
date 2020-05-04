import styled from 'styled-components';

export const Container = styled.img`
  width: 15%;
  /* margin: 3%; */

  & + img {
    margin-left: 2%;
  }

  &:hover {
    /* transform: scale(1.1); */
    opacity: 0.7;
  }
`;

// export const Figure = styled.figure`
//   overflow: hidden;
// `;

// export const Placeholder = styled.div`
//   background-color: rgb(36, 36, 36);
//   padding-top: 148.066%;
//   content: '';
//   display: block;
//   pointer-events: none;
//   width: 100%;
// `;

// export const Wrapper = styled.span`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   width: 15.6167%;
// `;

// export const ThumbWrapper = styled.div`
//   z-index: 2;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: relative;
//   /* width: 15.6167%; */
// `;

// export const Thumb = styled.img`
//   position: relative;
//   transition: opacity 0.3s;
//   width: 100%;
//   height: auto;
//   display: block;
//   /* width: 49.37%; */
// `;
