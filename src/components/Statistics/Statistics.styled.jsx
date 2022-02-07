import styled from 'styled-components';
import StatisticsColor from './StatisticsColor';

export const Wrapper = styled.section`
  width: 300px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 8px 7px 6px 2px rgba(100, 100, 100, 0.4);
`;

export const Title = styled.h2`
  padding: 20px 0;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 0;
  box-shadow: 2px 4px 3px #ececec;
  background-color: ${StatisticsColor};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-shadow: 3px 3px 4px #000;
`;

export const Percentage = styled(Label)``;
