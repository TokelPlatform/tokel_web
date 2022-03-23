import styled from '@emotion/styled';
import borderBG from 'images/backgrounds/border.svg';

const TableComponent = styled.table`
  background-image: url(${borderBG});
  background-repeat: no-repeat;
  background-position-x: 560px;
  font-size: 26px;
  p {
    color: rgb(255, 255, 255, 0.8);
  }

  padding: 1rem;
  border-spacing: 0;

  tr > td:first-of-type {
    color: rgb(255, 255, 255, 0.8);
    text-align: left;
    font-size: var(--font-size-p);
    font-weight: 400;
    text-transform: uppercase;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  tr > td {
    min-width: 150px;
    text-align: center;
  }

  td {
    margin: 0;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    border-right: 1px solid rgb(255, 255, 255, 0.5);

    :last-child {
      border-right: 0;
      border-left: 0;
    }
    :nth-of-type(3) {
      border-right: 0;
    }
  }

  /* tr:first-of-type::before {
    height: 30px;
    width: 40px;
    background-color: red;
    display: inline-block;
  } */
  /* tr:first-of-type {
    td:last-child {
      border-top: 10px solid;
    }
  } */
  /* tr:last-child {
    td:last-child {
      border-bottom: 10px solid;
    }
  } */

  /* td:nth-of-type(4) {
    border-right: 10px solid;
    border-left: 10px solid;
  } */
`;

export default TableComponent;
