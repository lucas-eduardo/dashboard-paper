export interface IWrapperContent {
  showContent: boolean;
}

export interface ISubmenu {
  title: string;
  active: boolean;
  onClick: () => void;
}

export interface IMenuItem {
  title: string;
  icon?: React.FunctionComponent;
  active?: boolean;
  openSubmenu?: boolean;
  onClick?: () => void;
  subMenu?: ISubmenu[];
}

export interface IMenuProps {
  isOpen: boolean;
  menus: IMenuItem[];
  handleMenu: () => void;
}

export interface IPrimaryMenuProps {
  items: IMenuItem[];
  handleClick: (item: IMenuItem) => void;
}

export interface ISubMenuProps {
  submenu?: ISubmenu[];
}

export type IUseStateControlProps = Omit<IMenuProps, 'handleMenu'>;
