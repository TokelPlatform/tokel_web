import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
// import iconImages from '../../data/icons';
// import links from '../../data/links';
import styled from '@emotion/styled';
import ClickableIcon from 'components/Atoms/ClickableIcon';
import links from 'data/links';
import icons from 'data/icons';

type IconBlockProps = {
  title: string;
  desc: string;
  iconsList: string[];
  idx: number;
};

const FooterBlockRoot = styled.div`
  width: 300px;

  h5 {
    font-weight: 700;
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   background: ${props => (props.idx % 2 === 0 ? 'var(--color-gray-10opacity)' : 'transparent')};
//   padding: 1rem 3rem 1rem 3rem;
//   h2 {
//     text-transform: uppercase;
//     margin-bottom: 0.5rem;
//     font-family: var(--font-family-secondary);
//     font-size: 1.25rem;
//   }
//   p {
//     font-size: 0.875rem; // 14px
//     width: 180px;
//     color: var(--color-darkestBlue);
//     opacity: 0.5;
//     @media (max-width: ${breakpoints.mobilebig}) {
//       font-size: 1rem; // 14px
//       text-align: center;
//       width: 220px;
//     }
//   }
//   width: 200px;
//   height: 130px;
//   @media (max-width: ${breakpoints.tablet}) {
//     width: 175px;
//   }
//   @media (max-width: ${breakpoints.mobilebig}) {
//     width: 100%;
//     height: 100%;
//     align-items: center;
//     justify-content: center;
//   }
// `;
// const FooterTitle = styled.div`
//   display: flex;
//   flex-direction: row;
//   h2 {
//     margin-right: 1rem;
//   }
//   @media (max-width: ${breakpoints.mobilebig}) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     h2 {
//       margin: 0 0 1rem 0;
//     }
//     div a img {
//       height: 44px;
//     }
//   }
//   div {
//     padding: 1rem 0 0 0;
//     & > a {
//       padding: 0 0.3rem 0 0;
//     }
//   }
// `;

const IconsWrapper = styled.div`
  display: flex;
`;

const IconBlock = ({ title, desc, iconsList }: IconBlockProps): ReactElement => {
  return (
    <FooterBlockRoot>
      <h5>{title}</h5>
      <p>{desc}</p>
      <IconsWrapper>
        {iconsList.map((icon, key) => (
          <ClickableIcon key={key} link={links[icon]} icon={icons[icon]} />
        ))}
      </IconsWrapper>
    </FooterBlockRoot>
  );
};

export default IconBlock;
