import React from 'react';
import styled from '@emotion/styled';
import icons from 'data/icons';
const DownloadRoot = styled.div``;
type DownloadProps = {
  win: string;
  mac: string;
  lin: string;
};

const Box = styled.div`
  border: 8px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(97.43deg, #973af5 0%, #4ca6fe 100%);
  display: inline-block;
  img {
    padding: 1rem;
  }
`;

const Download = ({ win, mac, lin }: DownloadProps) => (
  <DownloadRoot>
    <h5>DONWLOAD</h5>
    <Box>
      <a href={win}>
        <img src={icons.win} />
      </a>
      <a href={mac}>
        <img src={icons.mac} />
      </a>
      <a href={lin}>
        <img src={icons.lin} />
      </a>
    </Box>
  </DownloadRoot>
);

export default Download;
