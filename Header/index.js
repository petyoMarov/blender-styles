import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

import { HeaderContainer, NavWrapper, AppBar } from './styles';
import { Logo, NavBar, DrawerMenu } from '../../components';
import getInitialTab from '../../utils/getInitialTab';

export default function Header() {
  const location = useLocation();
  const [tabPosition, setTabPosition] = useState(getInitialTab(location));
  const [drawerState, setDrawerState] = useState(false);

  const handleTabChange = (newValue) => {
    setTabPosition(newValue);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerState(open);
  };

  useEffect(() => {
    setTabPosition(getInitialTab(location));
  }, [location]);

  return (
    <NavWrapper>
      <HeaderContainer maxWidth="lg">
        <AppBar position="relative">
          <Logo />
          <Toolbar disableGutters>
            <NavBar
              handleTabChange={handleTabChange}
              tabPosition={tabPosition}
            />
            <DrawerMenu toggleDrawer={toggleDrawer} drawerState={drawerState} />
          </Toolbar>
        </AppBar>
      </HeaderContainer>
    </NavWrapper>
  );
}
