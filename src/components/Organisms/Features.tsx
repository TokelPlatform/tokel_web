import styled from '@emotion/styled';
import BannerRewards from 'components/Molecules/banners/BannerRewards';
import CommunityDriven from 'components/Molecules/Features/CommunityDriven';
import Feature from 'components/Molecules/Features/Feature';
import features from 'data/features';
import React from 'react';
import { VSpacerBig } from 'styles/common';
import featuresBg from 'images/backgrounds/features-bg.svg';

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeaturesRoot = styled.div`
  background-image: url(${featuresBg});
  background-repeat: no-repeat;
  background-size: cover;
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
        banner={feat.banner}
      />
    ))}
    <CommunityDriven
      subtitle="Community Driven"
      title="Join The Tokel Community"
      desc="Tokel has a vibrant community of digital creators, engineers, game designers and blockchain developers."
    />
    <VSpacerBig />
    <VSpacerBig />
    <BannerRewards />
    <VSpacerBig />
  </FeaturesRoot>
);

export default Features;
