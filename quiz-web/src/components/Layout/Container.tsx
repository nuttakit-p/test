import { Container as ContainerMUI } from '@mui/material';
import styled from 'styled-components';

import { Outlet } from 'react-router';

const Wrapper = styled(ContainerMUI)`
  min-height: calc(100vh - 115px);
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Container = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Container;
