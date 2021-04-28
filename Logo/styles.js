import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';

export const LogoContainer = styled.div``;

export const LogoButton = styled(Button)`
  padding: 0;
  font-family: 'Ubuntu', 'Open Sans', 'sans-serif';

  &:hover {
    background-color: unset;
  }
`;

export const LogoText = styled.p`
  font-size: 28px;
  letter-spacing: -4px;
  font-weight: bold;
  color: #dfdfea;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
