import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import Grid from './Grid';

const Container = () => (
  <Grid flexDirection="column" style={{height: "100%"}}>
    <Header />
    <Body />
    <Footer />
  </Grid>
);

export default withRouter(Container);
