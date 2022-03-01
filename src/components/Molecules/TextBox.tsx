import styled from '@emotion/styled';

import React from 'react';

type TextBoxProps = {
  title: string;
  icon?: string;
  desc: string;
  links?: [
    {
      url: string;
      urlName: string;
    }
  ];
  border?: boolean;
};

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 2rem 0;
  h4 {
    margin: 0;
  }
`;

type TextBoxRootProps = {
  border: boolean;
};
const TextBoxRoot = styled.div<TextBoxRootProps>`
  padding: 1.5rem;
  max-width: 300px;
  border: ${p => (p.border ? '0.5px solid var(--color-base-slate)' : 'none')};
  background-color: ${p => (p.border ? ' #000000;' : 'none')};
  z-index: 1;
  p {
    opacity: 0.8;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBox = ({ title, icon = null, desc, links = null, border = false }: TextBoxProps) => {
  return (
    <TextBoxRoot border={border}>
      <BoxTitle>
        <h4 style={{ fontWeight: 700 }}>{title}</h4>
        {icon && <img height="40" width="40" src={icon}></img>}
      </BoxTitle>
      <p style={{ minHeight: '120px' }}>{desc}</p>
      <LinksWrapper>
        {links &&
          links.map((link, idx) => (
            <a key={idx} href={link.url}>
              {link.urlName}
            </a>
          ))}
      </LinksWrapper>
    </TextBoxRoot>
  );
};

export default TextBox;
