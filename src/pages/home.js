import { useState, useEffect } from 'react';
import { InfoContainer, Layout } from '../containers';
import { HeroSection, ScrollToTop } from '../components';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <InfoContainer />
      <ScrollToTop scroll={scroll} isVisible={isVisible} />
    </Layout>
  );
}
