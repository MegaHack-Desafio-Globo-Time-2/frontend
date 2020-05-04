import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  color: #ccc;

  height: 78px;
  width: 100%;

  padding: 16px;
  z-index: 4;
  background: transparent;

  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.64), transparent);

  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease, opacity 0.2s linear;
  font-weight: 600;

  a.header-logo {
    flex-grow: unset;
    margin-right: 8px;
    display: flex;
    align-items: center;

    flex-grow: 1;
    max-width: 168px;
    /* margin-right: 0; */
  }

  a img {
    height: 78px;
    max-width: 168px;
  }

  nav {
    display: flex;
    line-height: 78px;

    justify-content: left;

    flex-grow: 10;

    align-items: center;
    opacity: 1;
    transition: opacity 0.3s;

    a {
      text-decoration: none;
      color: #ccc;

      & + a {
        margin-left: 24px;
      }

      &:hover,
      &.active {
        color: #fff;
      }

      &#more {
        display: flex;
        align-items: center;
      }

      svg {
        margin-left: 10px;
      }
    }
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  div + div {
    margin-left: 30px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;

    svg {
      color: #fff;
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 10px;
  }
`;
