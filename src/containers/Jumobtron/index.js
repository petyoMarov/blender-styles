import { Container, Grid } from '@material-ui/core';
import CardContainer from '../../components/CardContainer';

export default function Jumbotron() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <CardContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
