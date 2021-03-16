import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';

export const LogoButton = styled(Button)`
  padding: 0;

  &:hover {
    background-color: unset;
  }
`;

export const LogoImg = styled.img`
  width: 1.75rem;

  @media (max-width: 600px) {
    width: 1.5625rem;
    margin-right: 1.4375rem;
  }
`;

export const LogoText = styled.p`
  font-size: 1.75rem;
  letter-spacing: -4px;
  margin-left: 0.625rem;
  font-weight: bold;

  @media (max-width: 600px) {
    display: none;
  }
`;
