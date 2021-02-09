import styled from 'styled-components';

import { Card as CpCard } from '../../strategies/components/Card';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);

  grid-gap: 2rem;
`;

export const WrapperLineOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  column-gap: 3rem;
`;

export const WrapperLineTwo = styled.div`
  display: flex;
  align-items: center;

  .card-header {
    h5.card-title {
      margin-top: 1rem;
      margin-bottom: 1.2rem;

      color: #252422;

      font-size: 2.2rem;
    }

    p.card-category {
      color: #9a9a9a;

      font-size: 1.4rem;
    }
  }
`;

export const Card = styled(CpCard)`
  flex: 1;
  min-width: 24.5rem;

  .dash-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 4.2rem;
      height: 4.2rem;

      &.warning {
        color: #fbc658;
      }

      &.success {
        color: #6bd098;
      }

      &.error {
        color: #ef8157;
      }

      &.info {
        color: #51cbce;
      }
    }

    div {
      text-align: right;
    }

    p.card-category {
      color: #9a9a9a;

      text-transform: capitalize;

      font-size: 1.6rem;
      font-weight: 400;

      line-height: 1.4em;
    }

    p.card-title {
      margin: 0;

      color: #252422;

      font-size: 2.8rem;
    }
  }

  .card-footer {
    padding: 0 1.5rem 1.5rem;

    hr {
      margin-top: 1rem;
      margin-bottom: 1.5rem;

      border: 0;
      border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
    }

    div {
      display: flex;
      align-items: center;

      svg {
        width: 1.4rem;
        height: 1.4rem;

        color: #66615b;
      }

      span {
        margin-left: 0.5rem;

        font-size: 1.4rem;

        color: #9a9a9a;
      }
    }
  }
`;
