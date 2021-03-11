import {
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link as ReactRouterLink } from 'react-router-dom';
import routes from '../../constants/routes';
import useStyles from './styles';

export default function DrawerMenu({ toggleDrawer, drawerState }) {
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <IconButton onClick={toggleDrawer(true)}>
        <DehazeIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="top" open={drawerState} onClose={toggleDrawer(false)}>
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
  );
}
