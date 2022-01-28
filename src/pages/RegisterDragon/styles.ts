import styled from 'styled-components';

export const  Container = styled.div ``;

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

export const  ButtonArea = styled.div `
  flex: 1;
  display: flex; 
  align-items: center;
`;

export const  InputArea = styled.div `
  flex: 1;
  align-items: center;
`;

export const InputLabel = styled.label`
   flex: 1;
   margin : 10px;
`;

export const InputTitle = styled.div`
   font-weight: bold;
   margin-bottom : 5px;
`;

export const Input = styled.input`
  width: 100%;
  height : 30px;
  padding: 0px 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
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
  margin : 5px;
`;