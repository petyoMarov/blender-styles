import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  }
}));

export default useStyles;
