import Layout from '../containers/Layout';
import { ActionContainer } from '../containers';
import actionPagesContent from '../fixtures/action-pages-content';

export default function ToonifyYourself() {
  return (
    <Layout>
      <ActionContainer
        src={actionPagesContent.toonifyYourself.src}
        heading={actionPagesContent.toonifyYourself.title}
        desctiption={actionPagesContent.toonifyYourself.description}
        apiId={actionPagesContent.toonifyYourself.apiId}
      />
    </Layout>
  );
}
