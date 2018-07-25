import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Content from './Content';

const StyledBody = styled.main`
  display: flex;
  flex: 1;
  align-items: stretch;
`

const Body = () => (
  <StyledBody>
    <Sidebar />
    <Content />
  </StyledBody>
);

export default withRouter(Body);
