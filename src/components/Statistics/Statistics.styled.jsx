import styled from 'styled-components';
import StatisticsColor from './StatisticsColor';

export const Wrapper = styled.section`
  width: 300px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border: 1px solid black;
  box-shadow: 2px 4px 3px ${StatisticsColor};
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;
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
  box-shadow: 2px 4px 3px ${StatisticsColor};
  background-color: ${StatisticsColor};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
