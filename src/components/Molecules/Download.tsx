import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import icons from 'data/icons';
import axios from 'axios';
const DownloadRoot = styled.div``;

const Box = styled.div`
  border: 8px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(97.43deg, #973af5 0%, #4ca6fe 100%);
  display: inline-block;
  img {
    padding: 1rem;
  }
  img:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }
`;

const Download = () => {
  const [linBin, setLinBin] = useState('');
  const [macBin, setMacBin] = useState('');
  const [winBin, setWinBin] = useState('');

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/tokelPlatform/tokel_dapp/releases/latest')
      .then(release => {
        release.data.assets.map(binary => {
          const ext = binary.browser_download_url.split('.');
          const uri = binary.browser_download_url;
          switch (ext[ext.length - 1]) {
            case 'AppImage':
              return setLinBin(uri);
            case 'dmg':
              return setMacBin(uri);
            case 'exe':
              return setWinBin(uri);
          }
        });
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <DownloadRoot id="download">
      <Box>
        <a href={linBin}>
          <img alt="linux-download" src={icons.lin} />
        </a>
        <a href={winBin}>
          <img alt="windows-download" src={icons.win} />
        </a>
        <a href={macBin}>
          <img alt="mac-download" src={icons.mac} />
        </a>
      </Box>
    </DownloadRoot>
  );
};

export default Download;
