import styled from 'styled-components';

export const Table = styled.table`
  width: calc(100% / 3);
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 5px;
  background-color: #b0e7de;
  box-shadow: 0 2px 1px #6fa79d, 0 5px 4px #59ac9e, 0 11px 8px #19b49a,
    0 20px 15px#066e5d, 0 40px 30px #022520;
`;

export const TableHead = styled.thead`
  background-color: #066e5d;

  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid #fff;
    }
  }
`;

export const TableHeading = styled.th`
  padding: 8px;
  border: 1px solid #212121;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  color: #fff;
`;

export const TableBody = styled.tbody`
  text-align: center;
  text-transform: capitalize;

  &:nth-child(even) {
    background-color: #fff;
  }

  &:hover {
    background-color: #3cb39f;
  }
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #212121;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #023528;
`;

export const TableRowHead = styled.tr`
  th {
    border-color: #fff;
  }
`;

export const TableRowBody = styled.tr`
  
  td {
    border-color: #fff;
    :not(:last-child) {
      border-right: 1px solid #066e5d;
    }
`;
