import { Container as MUIContainer } from '@material-ui/core';
import styled from 'styled-components/macro';

export const Container = styled(MUIContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 3.625rem;
  margin-left: 5rem;
  margin-top: 3.125rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 2.375rem;
    margin-left: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.75rem;
  color: white;
  font-weight: bold;
  max-width: 500px;
  margin-top: 0;
  margin-left: 5rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-left: 0.625rem;
    max-width: 300px;
  }
`;
