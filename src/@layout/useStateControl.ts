import { useState, useCallback } from 'react';

const useStateControl = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setIsOpenMenu(oldState => !oldState);
  }, []);

  return {
    isOpenMenu,
    handleMenu,
  };
};

export { useStateControl };
