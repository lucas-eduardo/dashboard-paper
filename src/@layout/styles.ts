import styled from 'styled-components';

import breakpoints from '../styles/constants/breakpoints';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 0 1fr;
  grid-template-rows: 5.3rem calc(100vh - 5.3rem);

  grid-template-areas:
    'MENU HEADER'
    'MENU CONTENT';

  @media ${breakpoints.md} {
    grid-template-columns: auto 1fr;
  }
`;

export const WrapperHeader = styled.header`
  display: block;

  grid-area: HEADER;
`;

export const WrapperMenu = styled.menu`
  display: block;

  grid-area: MENU;

  background-color: transparent;

  width: auto;
  height: auto;
`;

export const WrapperContent = styled.main`
  display: block;

  grid-area: CONTENT;

  padding: 2rem;

  overflow-y: auto;
`;
