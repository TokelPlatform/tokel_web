import styled from '@emotion/styled';
import React from 'react';
import flyingTokel from 'images/launch/flying-tokel.svg';

const ContactStyled = styled.div`
  text-align: center;
  padding: 50px 0 50px 0;
  h4 {
    color: var(--color-lightBlue);
  }
`;
const Contact = () => (
  <ContactStyled>
    <h4>
      Contact us at <a href="mailto:contact@tokel.io">contact@tokel.io</a> or join{' '}
      <a href="https://discord.gg/SQzdUQWXrn">Tokel Discord</a>{' '}
    </h4>
    <img alt="flying-tokel" src={flyingTokel}></img>
  </ContactStyled>
);

export default Contact;
