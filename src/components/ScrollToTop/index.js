import { ScrollLink, ScrollIcon } from './styles';

export default function ScrollToTop({ scroll, isVisible }) {
  return (
    <ScrollLink onClick={scroll} to="/blender-styles/" $show={isVisible}>
      <ScrollIcon />
    </ScrollLink>
  );
}
