import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const ScrollLink = styled(Link)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #000104;
  padding: 7px;
  border-radius: 50%;
  background-color: rgba(10, 173, 255, 0.5);
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
`;

export const ScrollIcon = styled(KeyboardArrowUpIcon)`
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
