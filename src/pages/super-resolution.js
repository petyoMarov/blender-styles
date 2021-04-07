import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';

export default function SuperResolution() {
  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.superResolution.src}
        heading={actionPagesContent.superResolution.title}
        desctiption={actionPagesContent.superResolution.description}
        apiId={actionPagesContent.superResolution.apiId}
      />
    </Layout>
  );
}
