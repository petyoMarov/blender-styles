import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    maxHeight: '12.5rem'
  },
  cardMedia: {
    width: '50%',
    height: '50%'
  }
}));

export default useStyles;
