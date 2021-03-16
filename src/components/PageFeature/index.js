import Box from '@material-ui/core/Box';
import { Container, Title, Text } from './styles';

export default function PageFeature({ pageFeature }) {
  return (
    <Box height="50vh" bgcolor="#4aadeb">
      <Container maxWidth="lg">
        <Title>{pageFeature.title}</Title>
        <Text>{pageFeature.content}</Text>
      </Container>
    </Box>
  );
}
