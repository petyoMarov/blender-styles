import { Hidden, IconButton, Drawer, List } from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PresentationDiv, DrawerListItem, Icon, ListItemText } from './styles';
import routes from '../../constants/routes';

export default function DrawerMenu({ toggleDrawer, drawerState }) {
  return (
    <Hidden mdUp>
      <IconButton onClick={toggleDrawer(true)}>
        <Icon fontSize="large" />
      </IconButton>
      <Drawer anchor="top" open={drawerState} onClose={toggleDrawer(false)}>
        <PresentationDiv
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routes.map((route) => (
              <DrawerListItem
                component={ReactRouterLink}
                key={route.title}
                to={route.path}
                disableRipple
              >
                <ListItemText primary={route.title} />
              </DrawerListItem>
            ))}
            <DrawerListItem
              component="a"
              href="https://github.com/petyoMarov/blender-style"
            >
              <ListItemText primary="GitHub Repo" />
            </DrawerListItem>
          </List>
        </PresentationDiv>
      </Drawer>
    </Hidden>
  );
}
