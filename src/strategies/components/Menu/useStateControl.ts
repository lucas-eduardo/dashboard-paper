import { useState, useCallback, useEffect } from 'react';

import { IMenuItem, IUseStateControlProps } from './IMenu';

const useStateControl = ({ isOpen, menus }: IUseStateControlProps) => {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [items, setItems] = useState<IMenuItem[]>([]);

  const handleOpenSubmenu = useCallback((key: number) => {
    setItems(oldItems => [
      ...oldItems.map((item, itemKey) => ({
        ...item,
        openSubmenu: itemKey === key ? !item.openSubmenu : false,
      })),
    ]);
  }, []);

  const handleClick = useCallback(
    (item: IMenuItem) => {
      if (item.subMenu && item.subMenu.length) {
        const keyIndex = items.findIndex(({ title }) => title === item.title);

        return handleOpenSubmenu(keyIndex);
      }

      return item.onClick && item.onClick();
    },
    [items],
  );

  useEffect(() => {
    setOpen(isOpen);

    return () => {
      setOpen(false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowContent(true), 100);
    } else {
      setShowContent(false);
    }

    return () => {
      setShowContent(false);
    };
  }, [open]);

  useEffect(() => {
    setItems(menus);
  }, [menus]);

  return {
    items,
    open,
    showContent,
    handleClick,
  };
};

export { useStateControl };
