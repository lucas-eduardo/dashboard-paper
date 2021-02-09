import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 0;

  background-color: #fff;
  background-clip: border-box;

  color: #252422;

  border-radius: 1.2rem;

  border: none;

  box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%);

  transition: box-shadow 0.2s ease;

  margin-bottom: 2rem;

  .card-header {
    padding: 1.5rem 1.5rem 0;

    border: 0;

    &:not([data-background-color]) {
      background-color: transparent;
    }
  }

  .card-body {
    padding: 1.5rem 1.5rem 1rem;
  }

  .card-footer {
    border: 0;

    background-color: transparent;
  }

  .card-title {
    margin-bottom: 1.2rem;
  }

  .card-subtitle {
    margin-top: -0.6rem;
  }
`;

export const ContainerHeader = styled.div`
  padding: 1.2rem 2rem;

  margin-bottom: 0;

  background-color: rgba(0, 0, 0, 0.03);

  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.125);

  &:first-child {
    border-radius: calc(0.4rem - 0.1rem) calc(0.4rem - 0.1rem) 0 0;
  }
`;

export const ContainerCardBody = styled.div`
  flex: 1 1 auto;

  padding: 2rem;
`;

export const ContainerImage = styled.img`
  vertical-align: middle;
  border-style: none;

  max-width: 100%;
  border-radius: 0.3rem;

  &.top {
    width: 100%;

    flex-shrink: 0;

    border-radius: 0;

    border-top-left-radius: calc(0.4rem - 0.1rem);
    border-top-right-radius: calc(0.4rem - 0.1rem);
  }
`;

export const ContainerCardFooter = styled.div`
  padding: 1.2rem 2rem;

  background-color: rgba(0, 0, 0, 0.03);
  border-top: 0.1rem solid rgba(0, 0, 0, 0.125);

  &:last-child {
    border-radius: 0 0 calc(0.4rem - 0.1rem) calc(0.4rem - 0.1rem);
  }
`;
