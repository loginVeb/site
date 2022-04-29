import React from 'react';
import styled from 'styled-components';
import { device } from './@media';
import GlobalFonts from './Fonts/Fonts';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './3Header/Header';

const StyleAppWrapper = styled.div`
display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 55px); 
background: #cccccc ;
color:red;
  font-family:DSMoster.woff ;
@media ${device.mobileM} { 
border: solid 3px blue;
}
`

function App() {
  return (
    <BrowserRouter >
      <StyleAppWrapper>
        <GlobalFonts />
        <Route exact path='/' render={() => <Header />} />
        Осташков 7777
        {/* <Route exact path='/' render={() => <Main props={props.St} />} /> */}
        {/* <Route path='/Sms' render={() => <Sms props={props} />} /> */}
      </StyleAppWrapper>
    </BrowserRouter>
  );
};



export default App;
//npm start