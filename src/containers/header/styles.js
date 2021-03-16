import styled from 'styled-components/macro';
import {
  Container as MUIContainer,
  AppBar as MUIAppBar
} from '@material-ui/core';

export const Container = styled(MUIContainer)`
  padding: 0;
`;

export const AppBar = styled(MUIAppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: unset;
  height: 3.75rem;
  padding: 0 0.9375rem;
  background-color: #424242;
`;
