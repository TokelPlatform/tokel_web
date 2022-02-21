import styled from '@emotion/styled';
import Feature from 'components/Molecules/Features/Feature';
import features from 'data/features';
import React from 'react';

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeaturesRoot = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3,
  h2 {
    margin: 0;
  }
  h3 {
    color: var(--color-base-lilac);
  }
`;

const Features = () => (
  <FeaturesRoot>
    {features.map((feat, idx) => (
      <Feature
        key={idx}
        title={feat.title}
        subtitle={feat.subtitle}
        desc={feat.desc}
        image={feat.image}
        data={feat.data}
        links={feat.links}
        bg={feat.bg}
      />
    ))}
  </FeaturesRoot>
);

export default Features;
