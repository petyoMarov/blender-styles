import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

export default function CardContainer() {
  return (
    <Card>
      <CardMedia />
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
