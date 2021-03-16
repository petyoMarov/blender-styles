import styled from 'styled-components/macro';
import ListItem from '@material-ui/core/ListItem';

const DrawerListItem = styled(ListItem)`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: white;
  }
`;

export default DrawerListItem;
