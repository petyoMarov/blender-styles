import { Tabs, Tab, IconButton } from '@material-ui/core';
import styled from 'styled-components/macro';

export const Navigation = styled(Tabs)`
  @media (max-width: 980px) {
    display: none;
  }
`;

export const NavigationTab = styled(Tab)`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Ubuntu', 'Open Sans', sans-serif;
  color: #dfdfea;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const GithubIconButton = styled(IconButton)`
  @media (max-width: 980px) {
    display: none;
  }
`;
