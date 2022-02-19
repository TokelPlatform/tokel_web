import React from 'react';
import check from "../../images/table/check.svg";
import close from "../../images/table/close.svg";
import ether from "../../images/table/ether.svg";
import green from "../../images/table/green.svg";
import solana from "../../images/table/solana.svg";
import styled from '@emotion/styled'
import tokel from "../../images/table/tokel.svg";
// import makeData from './makeData'
import { useTable } from 'react-table'

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `

type TableProps = {
    columns: any,
    data: any
}

const TableComponent = styled.table`
  font-size: 26px;
  p {
    color: rgb(255,255,255,0.8);
  }
  
  padding: 1rem;
  border-spacing: 0;
  
  tr > td:first-child {
    color: rgb(255,255,255,0.8);
    text-align: left;
    font-size: 18px;
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
    border-bottom: 1px solid rgb(255,255,255,0.5);
    border-right: 1px solid rgb(255,255,255,0.5);

    :last-child {
      border-right: 0;
    }
  }

  tr:first-child {
    td:last-child {
      border-top: 10px solid;
      // border-image-source: var(--gradient-purple-direct);

    }
  }
  tr:last-child {
    td:last-child {
      border-bottom: 10px solid;
      // border-image-source: var(--gradient-purple-direct);
    }
  }
  
  td:nth-child(4) {
      border-right: 10px solid;
      border-left: 10px solid;
      // border-image-source: var(--gradient-purple-direct);
  }

`

function Table({ columns, data } :TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <TableComponent {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, idx) => (
          <tr key={idx} 
            {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={idx} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr 
            key={i}
            {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </TableComponent>
  )
}

const HeaderLogo = (title: string, src: string) => (
  <div>
    <img src={src}></img>
    <h4>{title}</h4>
  </div>
)

function ComparisonTable() {
  const columns = React.useMemo(
    () => [
        {
            Header: '',
            accessor: 'rowname'
        },
      {
        Header: HeaderLogo('Solana', solana),
        accessor: 'solana'
      },
      {
        Header: HeaderLogo('Ethereum', ether),
        accessor: 'ethereum'
      },
      {
        Header: HeaderLogo('Tokel', tokel),
        accessor: 'tokel'
      },
    ],
    []
  )
  
  type IconWrapperProps = {
    height?: string;
    width?: string;
  }

  const IconWrapper = styled.div<IconWrapperProps>`
      display: flex;
      justify-content: center;
      align-items: center;
  `

  const tableImage = (src: string, c:number=1) => {
    let imgs = [];
    for(let i = 0; i < c; i++) {
      imgs.push(<img key={i} src={src}/>)
    }
    return (
      <IconWrapper>
        {imgs}
      </IconWrapper>
    )
  }

  const data = React.useMemo(() => 
      [
          {
              rowname: <p>GAS FEE per <br/>transaction</p>,
              solana: '$0.00025',
              ethereum: '$4.04++',
              tokel: '$0'
          },
          {
              rowname: <p>COST TO CREATE <br/> 10000 NFTs</p>,
              solana: '$21,600',
              ethereum: '$700,000++',
              tokel: '$0.003'
          },
          {
            rowname: <p>COST TO CREATE<br/> ONE NFT</p>,
            solana: '$2.16',
            ethereum: '$70.00++',
            tokel: '$0.000003'
          },
          {
            rowname: <p>ENVIROMENTALLY <br/> FRIENDLY</p>,
            solana: tableImage(green, 2),
            ethereum: tableImage(green, 1),
            tokel: tableImage(green, 3),
          },
          {
            rowname: 'OPEN SOURCE',
            solana: tableImage(check),
            ethereum: tableImage(check),
            tokel: tableImage(check)
          },
          {
            rowname: <p>ALL IN ONE <br /> APPLICATION</p>,
            solana: tableImage(close),
            ethereum: tableImage(close),
            tokel: tableImage(check)
          },
          {
            rowname: 'LIGHT CLIENTS',
            solana: tableImage(close),
            ethereum: tableImage(close),
            tokel: tableImage(check)
          },
          {
            rowname: <p>Smart contracts/ <br /> contract audits</p>,
            solana: tableImage(check),
            ethereum: tableImage(check),
            tokel: tableImage(close)
          }
      ]
  );

  return (
      <Table columns={columns} data={data} />
  )
}

export default ComparisonTable
