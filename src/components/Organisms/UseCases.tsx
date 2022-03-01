import React from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';
import UseCaseBox from 'components/Molecules/TextBox';
import data from 'data/useCaseData';
import FeatureHeader from 'components/Molecules/Features/FeatureHeader';

const UseCasesRoot = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
  h2 {
    margin-bottom: 0;
  }
  h5 {
    margin-top: 0.5rem;
  }
`;

const UseCaseContainer = styled.div`
  display: flex;
  max-width: 1050px;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 2rem;
`;

const UseCases = () => {
  return (
    <UseCasesRoot>
      <FeatureHeader
        title="Tokel is For Everyone"
        subtitle="Everyone can use Tokel"
        desc="Whether you’re a content creator, collector, blockchain enthusiast, entrepeneur or in
      business, Tokel has the solution for you."
      />
      <UseCaseContainer>
        {data.map((useCase, idx) => (
          <UseCaseBox
            key={idx}
            title={useCase.title}
            icon={useCase.icon}
            links={useCase.links}
            desc={useCase.desc}
            border
          />
        ))}
      </UseCaseContainer>
    </UseCasesRoot>
  );
};

export default UseCases;
