import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";



const SEnter = styled.div`
grid-area: 4/6/6/8;
font-size: 20px;
color: red;
text-align:center;
background: #000000 ;
display:grid;
grid-template-columns:repeat(12, 8.333%); 
grid-template-rows:repeat(12, 8.333%); 

`

const Button = styled.button`
grid-area: 1/1/13/13;
`
const ButtonVhod = styled.button`
grid-area: 10/1/13/13;

`
const StyledLink = styled(NavLink)`
grid-area: 8/1/10/13;
text-decoration: none;
display:grid;
grid-template-columns:repeat(12, 8.333%); 
grid-template-rows:repeat(12, 8.333%); 
`

const Stextarea1 = styled.textarea`
grid-area: 1/1/4/13;
border:1px solid red;
`
const Stextarea2 = styled.textarea`
grid-area: 4/1/8/13;
border:1px solid red;
`

const Enter = (props) => {
debugger
  let textarea1 = React.createRef();
  let textarea2 = React.createRef();

  let textareaValue2 = () => {

     let Nik = textarea1.current.value;
     let Password = textarea2.current.value;
  
  }

  return (
    <SEnter>
      <Stextarea1 ref={textarea1}></Stextarea1>
      <Stextarea2 ref={textarea2}></Stextarea2>
      <ButtonVhod onClick={textareaValue2}>вход</ButtonVhod>
      <StyledLink to="/sms"><Button >Простая регистрация</Button></StyledLink>
    </SEnter>
  )
}
export default Enter;