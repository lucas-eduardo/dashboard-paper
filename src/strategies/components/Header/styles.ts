import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5.3rem;

  padding: 0 1.5rem;

  border-bottom: 0.1rem solid #ddd;
`;

export const WrapperContentLeft = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 2.7rem;
    height: 2.7rem;

    margin-right: 1.2rem;

    svg {
      width: 100%;
      height: 100%;

      color: #2c2c2c;
    }
  }

  h2 {
    color: #66615b;

    font-size: 1.6rem;

    line-height: 2.6rem;
  }
`;

export const ButtonToggler = styled.button`
  width: 2.7rem;
  height: 2.7rem;

  vertical-align: middle;

  div {
    width: 0.3rem;
    height: 0.3rem;

    border-radius: 50%;

    margin: 0 auto;

    background-color: #66615b;

    & + div {
      margin-top: 3px;
    }
  }
`;
