import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  }
}));

export default useStyles;
