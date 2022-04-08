import React from 'react';
import styled from 'styled-components';
// import {NavLink} from "react-router-dom";

import img from './img/fonSms.jpg';
import Chat from './Chat/Chat';

const SSms = styled.div`
grid-area: 1/1/13/13;
font-size: 20px;
color: red;
text-align:center;
background-image: url(${img});


display:grid;
grid-template-columns:repeat(12, 8.333%); 
  grid-template-rows:repeat(12, 8.333%);

`
const SsmsText = styled.div`
color:red;
border: 2px solid red;
/* overflow-x:hidden; 
text-align: center ; */
word-wrap: break-word; 
`

const SmsText = (props) => {
// debugge
  return <SsmsText>
  {props.text} 
  {props.tex}
  </SsmsText>
}


const Sms = (props) => {

  let LsmsText = props.props.State.Arrtext._arrText.map(e => <SmsText text={e.text} tex={e.tex}/>);

  return (
    <SSms>
      {LsmsText};
      <Chat props ={props.props}/>
    </SSms>
  )
}

export default Sms;