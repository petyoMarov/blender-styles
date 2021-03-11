import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0
  },

  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'unset',
    height: 60,
    padding: '0 15px',
    backgroundColor: theme.palette.background.paper
  }
}));

export default useStyles;
