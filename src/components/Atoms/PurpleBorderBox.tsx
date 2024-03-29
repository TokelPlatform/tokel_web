import styled from '@emotion/styled';

const PurpleBorderBox = styled.div`
  background-color: var(--color-darkestBlue);
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: var(--gradient-purple-to-lightblue);
  border-radius: 10px;
  position: relative;
  z-index: 2;
`;

export default PurpleBorderBox;
