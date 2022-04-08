import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { reateAction } from "./../../bd/bd.js";

const SChat = styled.div`
grid-area: 4/1/6/4;
font-size: 20px;
color: red;
text-align:center;
background: #4682B4;
display:grid;
grid-template-columns:repeat(12, 8.333%); 
grid-template-rows:repeat(12, 8.333%); 

`

const StyledLink = styled(NavLink)`
grid-area: 8/1/13/13;
text-decoration: none;
display:grid;
grid-template-columns:repeat(12, 8.333%); 
grid-template-rows:repeat(12, 8.333%); 
`
const Button = styled.button`
grid-area: 1/1/13/13;

`

const Stextarea1 = styled.textarea`
grid-area: 1/1/4/13;
border:1px solid red;
`
const Stextarea2 = styled.textarea`
grid-area: 4/1/8/13;
border:1px solid red;
 `

let textareaNik = React.createRef();
let textareaPassword = React.createRef();



const Chat = (props) => {

  let textareaValueNik = () => {
    let Nik = textareaNik.current.value;
    return Nik;
  }
  let textareaValuePassword = () => {
    let Password = textareaPassword.current.value;
    return Password;
  }

  let textareaValue2 = () => {

    // let Password = textareaPassword.current.value;
    // props.AddPost(`${textareaValueNik()},\n${Password}`)
    // props.props.dispatch({ type: 'ADD-POST', text: textareaValueNik(), tex: textareaValuePassword() })
    props.props.dispatch(reateAction(textareaValueNik,textareaValuePassword));
  }

  return (
    <SChat>
      <Stextarea1 ref={textareaNik}></Stextarea1>
      <Stextarea2 ref={textareaPassword}></Stextarea2>
      <StyledLink to="/sms"><Button onClick={textareaValue2}>komment</Button></StyledLink>
    </SChat>
  )
}
export default Chat;