import React from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';
import UseCaseBox from 'components/Molecules/TextBox';
import data from 'data/useCaseData';

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
`;

const UseCases = () => {
  return (
    <UseCasesRoot>
      <h2>Tokel is For Everyone</h2>
      <h5 style={{ maxWidth: '450px', textAlign: 'center' }}>
        Whether you’re a content creator, collector, blockchain enthusiast, entrepeneur or in
        business, Tokel has the solution for you.
      </h5>
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
