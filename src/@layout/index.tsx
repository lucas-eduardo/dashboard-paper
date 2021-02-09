import { Home, Map, Bell } from '@styled-icons/feather';

import { useStateControl } from './useStateControl';

import Header from '../strategies/components/Header';
import { IMenuItem } from '../strategies/components/Menu/IMenu';
import Menu from '../strategies/components/Menu';

import Page from '../pages/Dashboard';

import {
  Container,
  WrapperHeader,
  WrapperMenu,
  WrapperContent,
} from './styles';

const menus: IMenuItem[] = [
  {
    icon: Home,
    title: 'Dashboard',
    active: true,
    onClick: () => alert('Dashboard'),
  },
  {
    icon: Map,
    title: 'Maps',
    subMenu: [
      { active: false, title: 'Notificaçao 1', onClick: () => alert('Not 1') },
    ],
  },
  {
    icon: Bell,
    title: 'Notifications',
    subMenu: [
      { active: false, title: 'Notificaçao 2', onClick: () => alert('Not 2') },
    ],
  },
];

const Layout = () => {
  const { handleMenu, isOpenMenu } = useStateControl();

  return (
    <>
      <Container>
        <WrapperHeader>
          <Header handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
        </WrapperHeader>

        <WrapperMenu>
          <Menu handleMenu={handleMenu} isOpen={isOpenMenu} menus={menus} />
        </WrapperMenu>

        <WrapperContent>
          <Page />
        </WrapperContent>
      </Container>
    </>
  );
};

export default Layout;
