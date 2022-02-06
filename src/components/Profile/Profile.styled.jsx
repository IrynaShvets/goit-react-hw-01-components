import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #b0e7de50;
  border-radius: 7px;
  border: 1px solid #05413780;
  box-shadow: 5px 5px 7px 3px #066e5d;
  margin-bottom: 60px;
`;
/* 


&:hover {
    width: 500px;
  } */
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 180px;
  heigh: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid #05413780;
  border-radius: 50%;
  box-shadow: 3px 3px 5px 1px #066e5d;
  background-color: #fff;
`;

export const Name = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
  color: #022520;
`;

export const Tag = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #02252080;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #02252080;
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
  padding: 20px 0;
  border: 1px solid #05413780;
  box-shadow: 3px 3px 5px 1px #066e5d;
  background-color: #19b49a;
`;
export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #02252090;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #022520;
`;
