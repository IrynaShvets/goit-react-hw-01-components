import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  height: 80px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  box-shadow: 2px 4px 3px #000;
  border-radius: 3px;
  background-color: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 20px;
  box-shadow: 5px 4px 5px 1px rgba(100, 100, 100, 0.7);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  background: ${props => (props.status ? '#00FA00' : '#FC1423')};
`;

export const Avatar = styled.img`
  height: auto;
  border: 1px solid #000;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.7);
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 1px 2px 4px #000000;
`;
