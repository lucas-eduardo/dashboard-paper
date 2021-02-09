import { Scrollbars } from 'react-custom-scrollbars';

import { IMenuProps } from './IMenu';

import PrimaryMenu from './PrimaryMenu';

import { useStateControl } from './useStateControl';

import {
  Container,
  WrapperCloseMenu,
  WrapperContent,
  WrapperLogo,
  WrapperList,
} from './styles';

const Menu = ({ isOpen, handleMenu, menus }: IMenuProps) => {
  const { items, open, showContent, handleClick } = useStateControl({
    isOpen,
    menus,
  });

  return (
    <>
      <Container className={open ? 'open' : ''}>
        <WrapperContent showContent={showContent}>
          <WrapperLogo>
            <img src="https://demos.creative-tim.com/paper-dashboard/assets/img/logo-small.png" />

            <span>Template Admin</span>
          </WrapperLogo>

          <WrapperList>
            <Scrollbars autoHide autoHideTimeout={1500}>
              <PrimaryMenu items={items} handleClick={handleClick} />
            </Scrollbars>
          </WrapperList>
        </WrapperContent>
      </Container>

      {isOpen && <WrapperCloseMenu type="button" onClick={handleMenu} />}
    </>
  );
};

export default Menu;
