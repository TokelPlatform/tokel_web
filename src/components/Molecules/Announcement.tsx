import React from 'react';
import links from '../../data/links';
import styled from '@emotion/styled';

const AnnouncementRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(104, 123, 247, 0.2);
  text-align: center;

  h1 {
    color: var(--color-purple);
    font-size: 24px;
    font-family: ibm_plex, monospace;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0;
  }
  h2 {
    color: white;
    font-size: 18px;
    font-family: ibm_plex, monospace;
    font-weight: 400;
    margin-top: 0;
    opacity: 0.8;
  }
  a {
    text-decoration: none;
  }
`;

const Announcement = () => {
  return (
    <AnnouncementRoot>
      <a href={links.mediumEarlyAdopters}>
        <h1>TKL Time Lock Rewards</h1>
      </a>
      <h2>Early Adopter Initiative + FAQ</h2>
    </AnnouncementRoot>
  );
};

export default Announcement;
