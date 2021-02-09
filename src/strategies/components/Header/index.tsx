import { Menu, X } from '@styled-icons/feather';

import { IHeaderProps } from './IHeader';

import { Container, WrapperContentLeft, ButtonToggler } from './styles';

const Header = ({ handleMenu, isOpenMenu }: IHeaderProps) => {
  return (
    <Container>
      <WrapperContentLeft>
        <button type="button" onClick={handleMenu}>
          {isOpenMenu ? <X /> : <Menu />}
        </button>

        <h2>Paper Dashboard</h2>
      </WrapperContentLeft>

      <ButtonToggler>
        <div />
        <div />
        <div />
      </ButtonToggler>
    </Container>
  );
};

export default Header;
