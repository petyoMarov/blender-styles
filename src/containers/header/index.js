import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, AppBar, Toolbar } from '@material-ui/core';
import Logo from '../../components/logo';
import NavBar from '../../components/navBar';
import DrawerMenu from '../../components/drawer-menu';
import getInitialTab from '../../utils/getInitialTab';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  const [tabPosition, setTabPosition] = useState(getInitialTab(location));
  const [drawerState, setDrawerState] = useState(false);

  const handleTabChange = (event, newValue) => {
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
    <Box bgcolor="background.paper">
      <Container maxWidth="xl" className={classes.container}>
        <AppBar position="relative" className={classes.appBar}>
          <Logo />
          <Toolbar disableGutters>
            <NavBar
              handleTabChange={handleTabChange}
              tabPosition={tabPosition}
            />
            <DrawerMenu toggleDrawer={toggleDrawer} drawerState={drawerState} />
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}
