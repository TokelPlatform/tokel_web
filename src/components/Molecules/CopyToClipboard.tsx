/**
 * Copied from the dapp repo
 * github.com/tokelPlatform/tokel_dapp/
 */

import React, { useRef } from 'react';
import ReactTooltip from 'react-tooltip';

import styled from '@emotion/styled';
import icons from 'data/icons';

const COPIED = 'Copied!';
const IconWrapper = styled.div`
  cursor: pointer;
`;
const ImgClickableWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

type CopyProps = {
  textToCopy: string;
  color?: string;
};

const CopyToClipboard = ({ textToCopy }: CopyProps) => {
  const idRef = useRef(null);

  const copy = () => {
    ReactTooltip.show(idRef.current);
    // eslint-disable-next-line no-undef
    navigator.clipboard.writeText(String(textToCopy));
  };

  return (
    <IconWrapper onClick={() => copy()}>
      <div data-tip={COPIED} ref={idRef} />
      <ImgClickableWrapper onClick={() => copy()} onKeyDown={() => copy()}>
        <img alt="copy" src={icons.copy} />
      </ImgClickableWrapper>
      <ReactTooltip
        className="react-tooltip"
        event="click"
        eventOff="blur"
        delayShow={100}
        delayHide={1000}
        afterShow={() => ReactTooltip.hide()}
        backgroundColor="#313d4f"
      />
    </IconWrapper>
  );
};

CopyToClipboard.defaultProps = {
  color: 'var(--color-danger)',
};
export default CopyToClipboard;
