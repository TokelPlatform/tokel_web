import styled from '@emotion/styled';

export const VSpacerMedium = styled.div`
  height: 1rem;
`;

export const VSpacerBig = styled.div`
  height: 3rem;
`;

export const HSpacerMedium = styled.div`
  width: 1rem;
`;

export const HSpacerBig = styled.div`
  width: 3rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexCenterRow = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const FlexColRight = styled(FlexCol)`
  align-items: right;
`;

export const FlexColCenter = styled(FlexCol)`
  align-items: center;
  justify-content: center;
`;
