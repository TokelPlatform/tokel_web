import styled from '@emotion/styled';

const getIndex = idx => {
  console.log(idx);
  switch (idx) {
    case 1:
      return '22%';
    case 2:
      return '22%';
    default:
      return 0;
  }
};

type MenuUnderscoreLineProps = {
  chosen: number;
};

const MenuUnderscoreLine = styled.hr<MenuUnderscoreLineProps>`
  display: ${p => (p.chosen < 0 ? 'block' : 'none')};
  margin-left: ${p => (p.chosen ? getIndex(p.chosen) : '0')};
  margin-top: 0.5rem;
  height: 0.25rem;
  width: 16%;
  background: tomato;
  border: none;
  transition: 0.3s ease-in-out;
`;

export default MenuUnderscoreLine;
