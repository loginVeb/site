import React from 'react';
import styled from 'styled-components';
import { device } from './@media';
import GlobalFonts from './Fonts/Fonts'
import { BrowserRouter, Route } from "react-router-dom";

import Header from './3Header/Header';

const StyleAppWrapper = styled.div`

display: grid;
grid-template-columns:repeat(12, 8.333%);  
grid-template-rows:repeat(12, 50px); 
${'' /* border: solid 10px blue; */}
background: #cccccc ;

@media ${device.mobileM} { 
 border: solid 1px blue;
    
  }


`

function App() {
  return (
    <BrowserRouter >
      <StyleAppWrapper>
        <GlobalFonts />
        <Route exact path='/' render={() => <Header />} />
        {/* <Route exact path='/' render={() => <Main props={props.St} />} /> */}
        {/* <Route path='/Sms' render={() => <Sms props={props} />} /> */}
      </StyleAppWrapper>
    </BrowserRouter>
  );
};



export default App;
//npm start