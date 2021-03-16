import { Jumbotron } from '../containers';
import Layout from '../containers/Layout';
import pageFeature from '../fixtures/page-feature';

export default function Home() {
  return (
    <Layout pageFeature={pageFeature.home}>
      <Jumbotron />
    </Layout>
  );
}
