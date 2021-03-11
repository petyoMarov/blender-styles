import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
