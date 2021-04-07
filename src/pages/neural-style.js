import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';

export default function NeuralStyle() {
  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.neuralStyle.src}
        heading={actionPagesContent.neuralStyle.title}
        desctiption={actionPagesContent.neuralStyle.description}
        apiId={actionPagesContent.neuralStyle.apiId}
      />
    </Layout>
  );
}
