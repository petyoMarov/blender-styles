import PageFeature from '../../components/PageFeature';
import { Header } from '../index';

export default function Layout({ pageFeature, children }) {
  return (
    <>
      <Header />
      <PageFeature pageFeature={pageFeature} />
      {children}
    </>
  );
}
