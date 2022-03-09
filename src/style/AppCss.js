import styled from "styled-components";

export const AppMain = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  background-color: #131a28;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const Ptext = styled.p`
  color: white;
  font-size: 42px;
  font-weight: bolder;
  text-align: center;
  margin: 20px;
  margin-bottom: 80px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Square = styled.div`
  border: 2px solid #1cdbf5;
  min-width: 100px;
  min-height: 100px;
  font-size: 64px;
  color: #1cbdf5;
  padding: 30px;
`;

export const Button = styled.button`
  margin-top: 40px;
  border: 2px solid #1cdbf5;
  font-size: 16px;
  color: #1cbdf5;
  background-color: #131a28;
  padding: 16px;
  border-radius: 15px;
`;
