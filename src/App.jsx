import React from 'react';
import styled from 'styled-components';
import { device } from './@media';
import GlobalFonts from './Fonts/Fonts'
import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header19201/Header';
//import Main from './Main/Main';
//import Sms from './Sms/Sms.jsx';




const StyleAppWrapper = styled.div`

display: grid;
grid-template-columns:repeat(12, 8.333%);     
grid-template-rows:repeat(12, 90px); 
${'' /* border: solid 10px blue; */}
background: #cccccc ;

@media ${device.laptop} { 
 border: solid 100px blue;
    
  }


`

function App(props) {
  debugger
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