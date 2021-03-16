import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import useStyles from './styles';

export default function CardContainer() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="div"
        image="images/image-colorizer/rsz_train-1.jpg"
      />
      <CardContent>
        <Typography>Heading</Typography>
        <Typography>Text Content</Typography>
      </CardContent>
      <CardActions>
        <Button>TRY IT</Button>
      </CardActions>
    </Card>
  );
}
