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
  gap: 0.5rem;

  @media only Screen and (max-width: 48em) {
    display: none;
  }

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

export const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

export const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  cursor: pointer;
  //display: none;

  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }

  &::before,
  &::after {
    content: " ";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all o.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transition: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transition: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};

  background-color: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;
