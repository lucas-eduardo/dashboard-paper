import { IPrimaryMenuProps } from './IMenu';

import Submenu from './SubMenu';

import { WrapperPrimaryMenu, Button, ArrowRight } from './styles';

const PrimaryMenu = ({ items, handleClick }: IPrimaryMenuProps) => {
  return (
    <WrapperPrimaryMenu>
      {items.map(({ icon: Icon, ...item }, key) => (
        <li key={key}>
          <Button
            type="button"
            className={`${(item.active || item.openSubmenu) && 'active'}`}
            onClick={() => handleClick(item)}
          >
            {Icon && <Icon />} {item.title}
            {item.subMenu && item.subMenu?.length > 0 && (
              <ArrowRight className={`${item.openSubmenu && 'open'}`} />
            )}
          </Button>

          {item.openSubmenu && <Submenu submenu={item.subMenu} />}
        </li>
      ))}
    </WrapperPrimaryMenu>
  );
};

export default PrimaryMenu;
