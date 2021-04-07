import styled from 'styled-components/macro';
import { Box, Container, AppBar as MUIAppBar } from '@material-ui/core';

export const NavWrapper = styled(Box)`
  background-color: #000104;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderContainer = styled(Container)`
  padding: 0;
`;

export const AppBar = styled(MUIAppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: unset;
  height: 60px;
  padding: 0 24px;
  background-color: #000104;
`;
