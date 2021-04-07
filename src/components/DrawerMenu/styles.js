import styled from 'styled-components/macro';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText as Text } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

export const Icon = styled(DehazeIcon)`
  font-size: 28px;
`;

export const PresentationDiv = styled.div`
  background: #000104;
`;

export const DrawerListItem = styled(ListItem)`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;

  &:hover {
    background-color: rgba(12, 175, 255, 0.8);
    color: #fff;
  }
`;

export const ListItemText = styled(Text)`
  > span {
    font-family: 'Ubuntu', 'Open Sans', 'sans-serif';
  }
`;
