import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';

export default function ImageColorization() {
  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.imageColorizer.src}
        heading={actionPagesContent.imageColorizer.title}
        desctiption={actionPagesContent.imageColorizer.description}
        apiId={actionPagesContent.imageColorizer.apiId}
      />
    </Layout>
  );
}
