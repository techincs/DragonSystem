import styled from 'styled-components';

export const  Container = styled.div `

`;

export const  Header = styled.div `
  background-color: darkblue;
  height: 150px;
  text-align: center;
`;

export const  HeaderText = styled.h1 `
  margin: 0;
  padding: 0;
  color: #FFF;
  padding: 30px;
`;

export const  ItemText = styled.h2 `
  margin: 0;
  padding: 0;
  color: #000;
`;

export const  DescricaoText = styled.h2 `
  margin: 0;
  padding: 0; 
  color: #F00;
  padding: 20px;
`;

export const  Body = styled.div `
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
  max-width: 980px;
  margin-top:-60px;
  display: flex;
  align-items: center; 
`;

export const  MontInfo = styled.div `
  flex: 1;
  display: flex; 
  align-items: center;
`;

export const  MontArea = styled.div `
  flex: 1;
  align-items: center;
`;

export const Btn = styled.button `
  cursor: pointer;
  background: darkblue;
  color: white;
  font-size: 1.2rem;
  border-style: outset;
  border-color: #0066A2;
  height: 30px;
  width: 100px;
  text-shadown: none;
  margin:15px;
`;