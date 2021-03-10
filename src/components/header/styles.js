import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main
  },
  container: {
    padding: 0
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'unset',
    height: 60,
    padding: '0 15px'
  },

  logoButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'unset'
    }
  },
  logoImg: {
    width: '35px'
  },

  logoText: {
    fontSize: '28px',
    letterSpacing: '-4px',
    marginLeft: '10px',
    fontWeight: 'bold'
  },

  tabs: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  tab: {
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
  },

  githubButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  drawerLi: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: 'white'
    }
  }
}));

export default useStyles;
