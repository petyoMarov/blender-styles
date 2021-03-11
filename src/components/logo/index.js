import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import logo from '../../logo.svg';

export default function Logo() {
  const classes = useStyles();

  return (
    <Box>
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
    </Box>
  );
}
