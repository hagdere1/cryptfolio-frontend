import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 5px 30px 5px 20px;
  background-color: #d6e9fe;
`
const FooterItem = styled.span`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`

const Footer = () => (
  <StyledFooter>
    <div>
      <FooterItem>© Armeneum, Inc.</FooterItem>
    </div>
    <div>
      <FooterItem>Terms</FooterItem>
      <FooterItem>Help</FooterItem>
    </div>
  </StyledFooter>
);

export default Footer;
