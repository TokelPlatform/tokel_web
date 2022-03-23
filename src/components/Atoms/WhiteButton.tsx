import styled from '@emotion/styled';

const WhiteButton = styled.button`
  width: 100px;
  height: 100px;
  /* border: 2px solid white; */
  outline: none;
  border: 1px solid;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  transition: 0.5s;
  border-radius: 50%;

  h5 {
    margin: 0;
    border-radius: 50%;
    font-weight: 700;
    width: 100px;
    height: 100px;
    transition: 0.5s;
    &:hover {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.25), 0 0 20px rgba(255, 255, 255, 0.25),
        0 0 30px rgba(255, 255, 255, 0.25), 0 0 0 75px rgba(255, 255, 255, 0.05),
        0 0 0 60px rgba(255, 255, 255, 0.05), 0 0 0 45px rgba(255, 255, 255, 0.05),
        0 0 0 30px rgba(255, 255, 255, 0.05), 0 0 0 15px rgba(255, 255, 255, 0.05);
    }
  }
`;

export default WhiteButton;
