import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`;

export const LogoDiv = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;


export const Nav = styled.nav` 
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    color: var(--white);
    line-height:  1.5;

    &::after {
      content: "";
      display: block;
      height: 3px; 
      width: 3px;
      background: transparent;
      transition: width 0.5s;

      &:hover::after {
        width: 100%;
        background: var(--purple);
      }
    }
  }
`