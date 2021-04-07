import Header from '../Header';
import { Footer } from '../../components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
