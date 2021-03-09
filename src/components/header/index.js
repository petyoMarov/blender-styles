import { useEffect, useState } from 'react';
import {
  Container,
  AppBar,
  Button,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  IconButton
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import logo from '../../logo.svg';
import routes from '../../constants/routes';
import getInitialTab from '../../utils/getInitialTab';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = useState(getInitialTab(location));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(getInitialTab(location));
  }, [location]);

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xl" className={classes.container}>
        <AppBar position="relative" className={classes.header}>
          <div>
            <Button
              component={ReactRouterLink}
              disableRipple
              className={classes.logoButton}
              to="/"
            >
              <img src={logo} alt="BLENDER-STYLE" className={classes.logoImg} />
              <Typography className={classes.logoText}>
                {'{ BLENDER-STYLE }'}
              </Typography>
            </Button>
          </div>
          <Toolbar disableGutters>
            <Tabs onChange={handleChange} value={value}>
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
              disableRipple
            >
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
