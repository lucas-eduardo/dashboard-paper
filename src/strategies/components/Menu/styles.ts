import styled, { keyframes, css } from 'styled-components';

import breakpoints from '../../../styles/constants/breakpoints';

import { IWrapperContent } from './IMenu';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Container = styled.div`
  position: absolute;

  display: block;

  top: 0;

  width: 0;
  height: 100vh;

  background-color: #fff;

  border-right: 1px solid #ddd;

  transition: width 0.3s;

  &.open {
    width: 20.6rem;
  }

  @media ${breakpoints.md} {
    position: initial;
  }
`;

export const WrapperCloseMenu = styled.button`
  position: absolute;

  top: 0;
  right: 0;

  width: calc(100vw - 20.6rem);
  height: 100vh;

  cursor: default;
`;

export const WrapperContent = styled.div<IWrapperContent>`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 5.3rem 100vh;

  grid-template-areas:
    'LOGO'
    'LIST';

  padding: 0 1.1rem;

  visibility: hidden;

  ${({ showContent }) =>
    showContent &&
    css`
      visibility: visible;
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;

  grid-area: LOGO;

  border-bottom: 1px solid #ddd;

  img {
    width: 3.4rem;
    height: 3.4rem;
  }

  span {
    margin-left: 1.2rem;

    color: #66615b;
  }
`;

export const WrapperList = styled.div`
  margin-top: 1rem;

  grid-area: LIST;
`;

export const WrapperPrimaryMenu = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;

  padding: 1rem 0.8rem 1rem 0;

  font-size: 1.2rem;

  line-height: 3rem;

  text-align: left;

  color: #66615b;

  opacity: 0.7;

  transition: color 0.2s;

  svg {
    width: 2.4rem;
    height: 2.4rem;

    margin-right: 1.2rem;
  }

  &.active {
    color: #ef8157;

    opacity: 1;
  }

  &:hover {
    color: #ef8157;
  }
`;

export const ArrowRight = styled.i`
  position: absolute;

  display: inline-block;

  border-color: #66615b;
  border-style: solid;
  border-width: 0 0.1rem 0.1rem 0;

  padding: 0.3rem;

  right: 2rem;

  transform: rotate(-45deg);

  transition: transform 0.2s;

  &.open {
    border-color: #ef8157;

    transform: rotate(45deg);
  }

  @media ${breakpoints.md} {
    right: 1rem;
  }
`;

export const WrapperSubmenu = styled.ul`
  padding-left: 3.6rem;

  list-style: none;

  animation: ${fadeIn} 0.5s ease-in-out;

  button {
    padding: 0.2rem 0;
  }
`;
