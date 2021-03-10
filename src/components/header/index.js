import { useEffect, useState } from 'react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import {
  Container,
  AppBar,
  Button,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../../logo.svg';
import routes from '../../constants/routes';
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
    <div className={classes.wrapper}>
      <Container maxWidth="xl" className={classes.container}>
        <AppBar position="relative" className={classes.header}>
          <div>
            <Button
              component={ReactRouterLink}
              disableRipple
              to="/"
              className={classes.logoButton}
            >
              <img src={logo} alt="BLENDER-STYLE" className={classes.logoImg} />
              <Typography className={classes.logoText}>
                {`{ BLENDER--STYLE }`}
              </Typography>
            </Button>
          </div>
          <Toolbar disableGutters>
            <Tabs
              onChange={handleTabChange}
              value={tabPosition}
              className={classes.tabs}
              textColor="secondary"
              TabIndicatorProps={{
                style: {
                  height: 3
                }
              }}
            >
              {routes.map((route) => (
                <Tab
                  component={ReactRouterLink}
                  key={route.title}
                  label={route.title}
                  to={route.path}
                  disableRipple
                  className={classes.tab}
                />
              ))}
            </Tabs>
            <IconButton
              component="a"
              href="https://github.com/petyoMarov/blender-style"
              className={classes.githubButton}
            >
              <GitHubIcon />
            </IconButton>
            <Hidden mdUp>
              <IconButton onClick={toggleDrawer(true)}>
                <DehazeIcon fontSize="large" />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerState}
                onClose={toggleDrawer(false)}
              >
                <div
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {routes.map((route) => (
                      <ListItem
                        component={ReactRouterLink}
                        key={route.title}
                        to={route.path}
                        disableRipple
                        className={classes.drawerLi}
                      >
                        <ListItemText primary={route.title} />
                      </ListItem>
                    ))}
                    <ListItem
                      component="a"
                      href="https://github.com/petyoMarov/blender-style"
                      className={classes.drawerLi}
                    >
                      <ListItemText primary="GitHub Repo" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
