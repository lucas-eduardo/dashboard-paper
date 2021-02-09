import { ISubMenuProps } from './IMenu';

import { WrapperSubmenu, Button } from './styles';

const SubMenu = ({ submenu }: ISubMenuProps) => {
  if (!submenu || !submenu.length) {
    return null;
  }

  return (
    <WrapperSubmenu>
      {submenu.map((item, key) => (
        <li key={key}>
          <Button
            type="button"
            className={`${item.active && 'active'}`}
            onClick={item.onClick}
          >
            {item.title}
          </Button>
        </li>
      ))}
    </WrapperSubmenu>
  );
};

export default SubMenu;
